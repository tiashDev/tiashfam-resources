# NVGIF Specification

**NVGIF (Not Very Good Image Format)** is a compact, versioned image format designed for simplicity, modularity, and offline experimentation. What started as a joke name became a flexible spec with alpha support, per-row compression, and decoders in both Python and C#—which, by all reasonable metrics, makes it a standard.

NVGIF doesn’t aim to be a universal format. It aims to be *yours*. And it shall always remain **Not Very Good**, proudly and permanently.

## 📄 Format Specifications

- [NVGIF v1–v3](v123.md): The early days. Minimal headers, row-based RLE, and the debut of alpha support in v3.
- [NVGIF v4](v4.md): Introduces per-row hybrid compression using RLE_Zlib and refined extensibility.

## 🖥️ Decoder Support

**AirSquirrel** is a lightweight web browser built using WebView2 for fast, offline-friendly browsing. While its primary purpose is general navigation and rendering, it includes native support for decoding `.nvg` images. It does so by intercepting HTTP requests for NVGIF files and converting them to standard PNGs at runtime—making NVGIFs viewable just like any other image format inside the browser.

Smooth scrolling, JS alert overrides, favicon handling, and local virtual hosting are all built-in. NVGIF support is simply one of its quirks.
