# NVGIF Specification

**NVGIF (Not Very Good Image Format)** is a compact, versioned image format designed for simplicity, modularity, and offline experimentation. What started as a joke name became a flexible spec with alpha support, per-row compression, and decoders in both Python and C#—which, by all reasonable metrics, makes it a standard.

NVGIF doesn’t aim to be a universal format. It aims to be *yours*. And it shall always remain **Not Very Good**, proudly and permanently.

## 📄 Format Specifications

- [NVGIF v1–v3](v123.md): The early days. Minimal headers, row-based RLE, and the debut of alpha support in v3.
- [NVGIF v4](v4.md): Introduces per-row hybrid compression using RLE_Zlib and refined extensibility.

## 🖥️ Decoder Support

**AirSquirrel** is a lightweight NVGIF-aware web browser built with WebView2, designed for smooth offline rendering and testing. It intercepts image requests from local servers, decodes `.nvg` files on the fly, and displays results in a responsive interface—making it ideal for developing and validating NVGIF content in real time.

It’s not just a viewer. It’s the squirrel’s official window into the format’s soul.
