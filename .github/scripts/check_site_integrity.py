#!/usr/bin/env python3
"""Validate tracked HTML references to local files without third-party packages."""

from __future__ import annotations

import subprocess
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[2]
REQUIRED_FILES = (
    "index.html",
    "CNAME",
    "css/common.css",
    "js/skeleton-loading.js",
    "data/packages.json",
    "assets/fonts/fonts.css",
    "list/index.json",
    "list/daftar-fitur.json",
    "catatan.md",
)


def tracked_html_files() -> list[Path]:
    result = subprocess.run(
        ["git", "ls-files", "-z", "--", "*.html"],
        cwd=ROOT,
        check=True,
        stdout=subprocess.PIPE,
    )
    return [
        ROOT / item.decode("utf-8")
        for item in result.stdout.split(b"\0")
        if item and not item.decode("utf-8").startswith("history/")
    ]


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        for attribute in ("href", "src", "poster", "data"):
            value = values.get(attribute)
            if value:
                self.references.append(value.strip())


def resolve_local_reference(source: Path, reference: str) -> Path | None:
    parsed = urlsplit(reference)
    if parsed.scheme or parsed.netloc or not parsed.path:
        return None

    raw_path = unquote(parsed.path)
    if raw_path.startswith("/"):
        candidate = ROOT / raw_path.lstrip("/")
    else:
        candidate = source.parent / raw_path

    candidate = candidate.resolve()
    try:
        candidate.relative_to(ROOT.resolve())
    except ValueError:
        return candidate

    if raw_path.endswith("/"):
        return candidate / "index.html"
    if candidate.is_dir():
        return candidate / "index.html"
    return candidate


def main() -> int:
    failures: list[str] = []

    for relative in REQUIRED_FILES:
        if not (ROOT / relative).is_file():
            failures.append(f"File wajib tidak ditemukan: {relative}")

    html_files = tracked_html_files()
    if not html_files:
        failures.append("Tidak ada file HTML terlacak yang ditemukan.")

    for source in html_files:
        parser = ReferenceParser()
        try:
            parser.feed(source.read_text(encoding="utf-8"))
            parser.close()
        except (OSError, UnicodeError) as error:
            failures.append(f"Tidak dapat membaca {source.relative_to(ROOT)}: {error}")
            continue

        for reference in parser.references:
            target = resolve_local_reference(source, reference)
            if target is None:
                continue
            try:
                target.relative_to(ROOT.resolve())
            except ValueError:
                failures.append(
                    f"{source.relative_to(ROOT)}: referensi keluar dari repository: {reference}"
                )
                continue
            if not target.is_file():
                failures.append(
                    f"{source.relative_to(ROOT)}: target lokal tidak ditemukan: {reference}"
                )

    if failures:
        print("Pemeriksaan integritas website gagal:")
        for failure in failures:
            print(f"- {failure}")
        return 1

    print(
        f"Pemeriksaan integritas lulus: {len(html_files)} file HTML "
        "dan semua referensi lokal yang diperiksa tersedia."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
