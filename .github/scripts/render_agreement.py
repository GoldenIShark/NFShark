#!/usr/bin/env python3
"""Render persetujuan.md into safe, static HTML during the Pages build."""
from __future__ import annotations

from html import escape
from html.parser import HTMLParser
import re
from urllib.parse import urlsplit

import markdown


ALLOWED_TAGS = {
    "a", "blockquote", "br", "code", "em", "h1", "h2", "h3",
    "h4", "h5", "h6", "hr", "li", "ol", "p", "pre", "strong", "ul",
}
VOID_TAGS = {"br", "hr"}
BLOCKED_TAGS = {"embed", "iframe", "math", "object", "script", "style", "svg", "template"}


def _safe_href(value: str | None) -> str | None:
    if not value:
        return None
    value = value.strip()
    try:
        parsed = urlsplit(value)
    except ValueError:
        return None
    if parsed.scheme.lower() == "https" and parsed.netloc and not parsed.username and not parsed.password:
        return value
    if parsed.scheme.lower() == "mailto" and parsed.path and not parsed.netloc:
        return value
    return None


class _Sanitizer(HTMLParser):
    """Keep only the small semantic HTML subset used by the agreement."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.stack: list[tuple[str, bool]] = []
        self.blocked: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        if self.blocked:
            if tag in BLOCKED_TAGS:
                self.blocked.append(tag)
            return
        if tag in BLOCKED_TAGS:
            self.blocked.append(tag)
            return
        if tag not in ALLOWED_TAGS:
            return

        attributes = dict(attrs)
        rendered_attrs: list[str] = []
        if tag == "a":
            href = _safe_href(attributes.get("href"))
            if not href:
                self.stack.append((tag, False))
                return
            rendered_attrs.extend((
                f'href="{escape(href, quote=True)}"',
                'rel="noopener noreferrer"',
            ))
            title = attributes.get("title")
            if title:
                rendered_attrs.append(f'title="{escape(title, quote=True)}"')
        elif tag == "ol":
            start = attributes.get("start")
            if start and start.isdigit() and 1 <= int(start) <= 100000:
                rendered_attrs.append(f'start="{int(start)}"')

        suffix = f" {' '.join(rendered_attrs)}" if rendered_attrs else ""
        self.parts.append(f"<{tag}{suffix}>")
        if tag not in VOID_TAGS:
            self.stack.append((tag, True))

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if self.blocked:
            for index in range(len(self.blocked) - 1, -1, -1):
                if self.blocked[index] == tag:
                    del self.blocked[index:]
                    break
            return

        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                for name, emit in reversed(self.stack[index:]):
                    if emit:
                        self.parts.append(f"</{name}>")
                del self.stack[index:]
                return

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)
        if tag.lower() not in VOID_TAGS:
            self.handle_endtag(tag)

    def handle_data(self, data: str) -> None:
        if not self.blocked:
            self.parts.append(escape(data, quote=False))

    def handle_comment(self, data: str) -> None:
        pass

    def close(self) -> None:
        super().close()
        while self.stack:
            name, emit = self.stack.pop()
            if emit:
                self.parts.append(f"</{name}>")


class _AgreementTextParser(HTMLParser):
    """Extract only visible text inside #agreement-document for equivalence checks."""

    VOID = {
        "area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr",
    }

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.found = False
        self.active = False
        self.depth = 0
        self.parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if not self.active:
            if tag.lower() == "div" and dict(attrs).get("id") == "agreement-document":
                self.found = True
                self.active = True
                self.depth = 1
            return
        if tag.lower() not in self.VOID:
            self.depth += 1

    def handle_endtag(self, tag: str) -> None:
        if not self.active or tag.lower() in self.VOID:
            return
        if tag.lower() == "div" and self.depth == 1:
            self.active = False
            self.depth = 0
            return
        self.depth -= 1

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)
        if tag.lower() not in self.VOID:
            self.handle_endtag(tag)

    def handle_data(self, data: str) -> None:
        if self.active:
            self.parts.append(data)


def _normalize_text(value: str) -> str:
    return " ".join(value.split())


def _source_text(markdown_text: str) -> str:
    """Remove only the Markdown syntax used in persetujuan.md."""
    lines: list[str] = []
    for raw_line in markdown_text.splitlines():
        line = raw_line.strip()
        if not line or re.fullmatch(r"-{3,}", line):
            continue
        if re.match(r"^#{1,6}\s+", line):
            line = re.sub(r"^#{1,6}\s+", "", line, count=1)
        else:
            line = re.sub(r"^(?:\d+\.\s+|[-+*]\s+)", "", line, count=1)
        line = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r"\1", line)
        line = line.replace("**", "").replace("*", "").replace(chr(96), "")
        lines.append(line)
    return _normalize_text(" ".join(lines))


def render_markdown(markdown_text: str) -> str:
    """Convert Markdown, then sanitize it before it enters the deployment HTML."""
    raw_html = markdown.markdown(markdown_text, extensions=[], output_format="html5")
    sanitizer = _Sanitizer()
    sanitizer.feed(raw_html)
    sanitizer.close()
    return "".join(sanitizer.parts)


def verify_rendered_content(markdown_text: str, html_document: str) -> None:
    parser = _AgreementTextParser()
    parser.feed(html_document)
    parser.close()
    if not parser.found:
        raise ValueError("Kontainer #agreement-document tidak ditemukan pada HTML hasil build.")

    expected = _source_text(markdown_text)
    actual = _normalize_text(" ".join(parser.parts))
    if actual != expected:
        limit = min(len(actual), len(expected))
        mismatch = next((i for i in range(limit) if actual[i] != expected[i]), limit)
        raise ValueError(
            "Isi HTML hasil render tidak sama dengan persetujuan.md "
            f"(perbedaan pertama sekitar karakter {mismatch}; "
            f"teks sumber {len(expected)} karakter, HTML {len(actual)} karakter)."
        )
