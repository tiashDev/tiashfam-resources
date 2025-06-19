# NVGIF Specification

**NVGIF (Not Very Good Image Format)** is a compact, versioned image format designed for simplicity, modularity, and offline experimentation. What started as a joke name became a flexible spec with alpha support, per-row compression, and decoders in both Python and C#—which, by all reasonable metrics, makes it a standard.

NVGIF doesn’t aim to be a universal format. It aims to be *yours*. And it shall always remain **Not Very Good**, proudly and permanently.

## 📄 Format Specifications

- [NVGIF v1–v3](v123.md): The early days. Minimal headers, row-based RLE, and the debut of alpha support in v3.
- [NVGIF v4](v4.md): Introduces per-row hybrid compression using RLE_Zlib and refined extensibility.

## 🖥️ Decoder Support

**AirSquirrel** is a lightweight web browser built using WebView2 for smooth, offline-friendly browsing. While primarily a general-purpose browser, it includes native support for `.nvg` images: AirSquirrel intercepts requests for NVGIF files and converts them to standard PNGs at runtime, allowing seamless viewing directly in the browser.

It features custom alerts, favicon overrides, PDF export, and a customizable Speed Dial interface (served from disk).  
AirSquirrel also serves as the **C# reference implementation** of the NVGIF decoder discussed earlier in this document.

## 🛠️ NVGIF CLI Tool

A standalone NVGIF encoder/decoder is available as a command-line utility for Windows. It supports version-aware encoding, decoding, and header inspection across all NVGIF versions.

You can [download the latest NVGIF CLI here](https://drive.google.com/uc?export=download&id=1oGu3PTlAsCwdeyNMOkjsmXBtXkHHcn8u).

> ⚠️ Google Drive may warn that it can't scan this file for viruses. This is expected for `.exe` files and doesn't indicate a problem—it's simply too large for Drive’s built-in scanner. The file is safe and was built from source using the **Python** implementation of the NVGIF spec.

This tool is ideal for scripting, testing, or integrating NVGIF into your own pipelines—no GUI required.

### 🔧 Example Usage

Encode a PNG file into NVGIF v4:
```batch
nvgif.exe encode input.png output.nvg --version 4
```

Convert an `.nvg` file back into a standard PNG:
```batch
nvgif.exe decode input.nvg output.png
```

Display an NVGIF file's header and metadata:
```batch
nvgif.exe info input.nvg
```

Update an `.nvg` file to a newer NVGIF version:
```batch
nvgif.exe update old.nvg updated.nvg --version 4
```
> Re-encodes `old.nvg` as NVGIF v4 using default compression (e.g. `rlezlib` if unspecified).

Customize compression and alpha support:
```batch
nvgif.exe update input.nvg output.nvg --version 4 --compression rle --alpha
```
> Converts to v4 using RLE compression and enables transparency.

Downgrade to v2 for compatibility testing:
```batch
nvgif.exe update image.nvg legacy.nvg --version 2 --compression rle
```
> Produces a v2-compatible file with RLE compression, suitable for older decoders.

Let NVGIF CLI choose sensible defaults:
```batch
nvgif.exe update input.nvg output.nvg
```
> Uses default target version (v4) and matching default compression settings.

View an NVGIF image in a resizable window:
```batch
nvgif.exe view image.nvg
```
> Launches a graphical window with the image rendered over a checkerboard background (for transparency), auto-scaled to fit the screen. Handy for previewing `.nvg` files without converting to PNG.

For more options, run:
```batch
nvgif.exe --help
```

These examples assume you're running the CLI in the same directory as the executable. Adjust paths as needed!
