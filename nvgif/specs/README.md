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
