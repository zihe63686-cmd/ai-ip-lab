import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: { NEXT_PUBLIC_BASE_PATH: isGitHubPages ? "/ai-ip-lab" : "" },
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/ai-ip-lab" : "",
  assetPrefix: isGitHubPages ? "/ai-ip-lab/" : undefined,
};

export default nextConfig;
