import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Humberto Bracho — Portfolio',
		short_name: 'Heizahn',
		description:
			'Portfolio of Humberto Bracho. Full Stack developer — React, Node/Bun, Rust.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0b0a18',
		theme_color: '#6366f1',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
