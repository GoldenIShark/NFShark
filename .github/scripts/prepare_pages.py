#!/usr/bin/env python3
"""Create a clean, public-only directory for GitHub Pages deployment."""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = (ROOT / sys.argv[1]).resolve() if len(sys.argv) > 1 else ROOT / "site"
PUBLIC_DIRECTORIES = ("assets", "css", "data", "js", "portofolio")
ROOT_STATIC_FILES = (
    "CNAME",
    "robots.txt",
    "sitemap.xml",
    "favicon.ico",
    "manifest.webmanifest",
    "site.webmanifest",
    "browserconfig.xml",
)


def main() -> None:
    if OUTPUT == ROOT or ROOT in OUTPUT.parents:
        if OUTPUT.exists():
            shutil.rmtree(OUTPUT)
    else:
        raise SystemExit("Output deployment harus berada di dalam repository.")

    OUTPUT.mkdir(parents=True, exist_ok=True)

    for page in ROOT.glob("*.html"):
        shutil.copy2(page, OUTPUT / page.name)

    for name in ROOT_STATIC_FILES:
        source = ROOT / name
        if source.is_file():
            shutil.copy2(source, OUTPUT / name)

    for name in PUBLIC_DIRECTORIES:
        source = ROOT / name
        if source.is_dir():
            shutil.copytree(source, OUTPUT / name)

    # Disable Jekyll processing so underscore-prefixed static assets are preserved.
    (OUTPUT / ".nojekyll").write_text("", encoding="utf-8")

    print("Direktori publik siap dibuat:", OUTPUT.relative_to(ROOT))
    print("Isi yang disertakan:", ", ".join(
        [p.name for p in OUTPUT.iterdir()]
    ))


if __name__ == "__main__":
    main()
