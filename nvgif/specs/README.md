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

Decode an `.nvg` file to raw RGBA:
```batch
nvgif.exe decode input.nvg output.raw
```

Display an NVGIF file's header and metadata:
```batch
nvgif.exe info input.nvg
```

For more options, run:
```batch
nvgif.exe --help
```

These examples assume you're running the CLI in the same directory as the executable. Adjust paths as needed!
