import type { NextConfig } from 'next';

/**
 * The site is a fully static export (`out/`) served by Cloudflare Workers
 * (assets only, see wrangler.jsonc).
 * Anything that needs a server at request time (API routes, Server Actions,
 * middleware/proxy, ISR, on-demand image optimisation) is intentionally off.
 * Security and cache headers live in `public/_headers`, redirects in
 * `public/_redirects`, because Cloudflare applies those files at the edge.
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
