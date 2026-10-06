import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Humberto Bracho — Portfolio',
		short_name: 'Heizahn',
		description:
			'Portfolio of Humberto Bracho. Full Stack developer — React, Node/Bun, Rust.',
		start_url: '/',
		display: 'standalone',
		background_color: '#0e1220',
		theme_color: '#ff8a4c',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
