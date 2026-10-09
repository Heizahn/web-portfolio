/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static export: `next build` writes the site to ./out, served by Cloudflare (wrangler.jsonc).
	output: 'export',
	images: {
		// No image optimization server on a static host.
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
		],
	},
};

export default nextConfig;
