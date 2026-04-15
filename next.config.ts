import type { NextConfig } from "next";
import nextra from "nextra";

const nextConfig: NextConfig = {
  /* config options here */
};

const withNextra = nextra({
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
