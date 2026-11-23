#!/usr/bin/env python3
"""Build a public-only GitHub Pages directory with clean, extensionless routes."""
from __future__ import annotations
import posixpath
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = (ROOT / sys.argv[1]).resolve() if len(sys.argv) > 1 else ROOT / "site"
PUBLIC_DIRECTORIES = ("assets", "css", "data", "js", "portofolio")
ROOT_STATIC_FILES = ("CNAME", "robots.txt", "sitemap.xml", "llms.txt", "sitemap.txt", "favicon.ico", "manifest.webmanifest", "site.webmanifest", "browserconfig.xml")
ROUTES = {
    "brief.html": "brief", "faq.html": "faq", "feedback.html": "feedback",
    "persetujuan.html": "persetujuan", "ui-preview.html": "ui-preview",
    "403.html": "403", "404.html": "404", "500.html": "500", "error.html": "error",
}

def clean_reference(value: str, current_route: str, root_page: bool) -> str:
    if not value or value.startswith(("http://", "https://", "mailto:", "tel:", "data:", "javascript:", "//")):
        return value
    if value.startswith("#"):
        return current_route + value
    match = re.match(r"^([^?#]*)([?#].*)?$", value)
    path, suffix = match.group(1), match.group(2) or ""
    if path in ("", "."):
        return current_route + suffix
    if path == "index.html":
        return ("/" if root_page else current_route) + suffix
    if path in ROUTES:
        return "/" + ROUTES[path] + "/" + suffix
    if path.endswith(".html"):
        normalized = path if path.startswith("/") else posixpath.normpath(posixpath.join(current_route, path))
        if normalized == "/index.html":
            return "/" + suffix
        if normalized.endswith("/index.html"):
            return normalized[:-len("index.html")] + suffix
        filename = posixpath.basename(normalized)
        if filename in ROUTES:
            return "/" + ROUTES[filename] + "/" + suffix
    return value

def process_html(path: Path, route: str, root_page: bool) -> None:
    text = path.read_text(encoding="utf-8")
    if root_page and "<base " not in text.lower():
        text = re.sub(r"<head([^>]*)>", r'<head\1>\n    <base href="/">', text, count=1, flags=re.I)
    attr_pattern = re.compile(r'\b(href|src|action|poster)=(["\'])(.*?)\2', re.I)
    text = attr_pattern.sub(lambda m: f'{m.group(1)}={m.group(2)}{clean_reference(m.group(3), route, root_page)}{m.group(2)}', text)
    canonical = f'<link rel="canonical" href="https://nfshark.web.id{route}">'
    if 'rel="canonical"' not in text:
        text = re.sub(r"</head>", f"    {canonical}\n  </head>", text, count=1, flags=re.I)
    script_tag = '<script src="/js/clean-navigation.js" defer></script>'
    if script_tag not in text and re.search(r"</head>", text, re.I):
        text = re.sub(r"</head>", f"    {script_tag}\n  </head>", text, count=1, flags=re.I)
    path.write_text(text, encoding="utf-8")

def main() -> None:
    if OUTPUT == ROOT or ROOT in OUTPUT.parents:
        if OUTPUT.exists():
            shutil.rmtree(OUTPUT)
    else:
        raise SystemExit("Output deployment harus berada di dalam repository.")
    OUTPUT.mkdir(parents=True, exist_ok=True)

    # Keep legacy .html endpoints while also publishing clean directory routes.
    for page in ROOT.glob("*.html"):
        shutil.copy2(page, OUTPUT / page.name)
    studio_alias = OUTPUT / "studio"
    studio_alias.mkdir(parents=True, exist_ok=True)
    shutil.copy2(ROOT / "index.html", studio_alias / "index.html")

    for filename, slug in ROUTES.items():
        source = ROOT / filename
        if source.is_file():
            route_dir = OUTPUT / slug
            route_dir.mkdir(parents=True, exist_ok=True)
            shutil.copy2(source, route_dir / "index.html")

    for name in ROOT_STATIC_FILES:
        source = ROOT / name
        if source.is_file():
            shutil.copy2(source, OUTPUT / name)
    for name in PUBLIC_DIRECTORIES:
        source = ROOT / name
        if source.is_dir():
            shutil.copytree(source, OUTPUT / name)

    # Rewrite public HTML references to extensionless paths and support hash-free scrolling.
    for page in OUTPUT.rglob("*.html"):
        relative = page.relative_to(OUTPUT)
        if relative.parent.as_posix() == "studio":
            route = "/studio/"
        elif relative.name == "index.html" and relative.parent != Path("."):
            route = "/" + relative.parent.as_posix().strip("/") + "/"
        elif relative.name in ROUTES:
            route = "/" + ROUTES[relative.name] + "/"
        else:
            route = "/" if relative.name == "index.html" else "/" + relative.stem + "/"
        root_page = relative.parent == Path(".") or (relative.parent.as_posix() in (*ROUTES.values(), "studio") and relative.name == "index.html")
        process_html(page, route, root_page)

    # Legacy .html URLs redirect to their clean equivalents; 404.html stays the Pages error document.
    for filename, slug in ROUTES.items():
        if filename == "404.html":
            continue
        redirect = f'''<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="robots" content="noindex"><link rel="canonical" href="https://nfshark.web.id/{slug}/"><meta http-equiv="refresh" content="0;url=/{slug}/"><title>Mengalihkan — NFShark</title></head><body><p>Halaman dipindahkan. <a href="/{slug}/">Lanjutkan ke halaman NFShark</a>.</p><script>location.replace("/{slug}/");</script></body></html>'''
        (OUTPUT / filename).write_text(redirect, encoding="utf-8")

    (OUTPUT / ".nojekyll").write_text("", encoding="utf-8")
    print("Direktori publik siap dibuat:", OUTPUT.relative_to(ROOT))
    print("Rute bersih:", ", ".join("/" + slug + "/" for slug in ROUTES.values()))

if __name__ == "__main__":
    main()
