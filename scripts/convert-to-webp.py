#!/usr/bin/env python3
"""Convert public/images/*.{png,jpg,jpeg} to .webp in place, then remove the originals."""

from pathlib import Path
from PIL import Image

IMAGES_DIR = Path(__file__).resolve().parent.parent / "public" / "images"
QUALITY = 82

def main():
    for src in sorted(IMAGES_DIR.glob("*")):
        if src.suffix.lower() not in (".png", ".jpg", ".jpeg"):
            continue
        dest = src.with_suffix(".webp")
        with Image.open(src) as img:
            img.save(dest, "webp", quality=QUALITY, method=6)
        src.unlink()
        print(f"{src.name} -> {dest.name}")

if __name__ == "__main__":
    main()
