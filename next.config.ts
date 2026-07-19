import type { NextConfig } from "next";

// Static export → renders to plain HTML/CSS/JS in ./out, deployable to GitHub Pages
// or any static host. Set NEXT_PUBLIC_BASE_PATH to "/<repo>" for a project page.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};

export default nextConfig;
