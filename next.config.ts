import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Bundle the sellable prompt files with the /success page's server function
  outputFileTracingIncludes: {
    "/success": ["./content/prompts/**/*"],
  },
};

export default nextConfig;
