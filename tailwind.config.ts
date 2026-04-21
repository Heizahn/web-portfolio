import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
					950: '#1e1b4b',
				},
				accent: {
					50: '#faf5ff',
					100: '#f3e8ff',
					200: '#e9d5ff',
					300: '#d8b4fe',
					400: '#c084fc',
					500: '#a855f7',
					600: '#9333ea',
					700: '#7e22ce',
					800: '#6b21a8',
					900: '#581c87',
					950: '#3b0764',
				},
				surface: {
					DEFAULT: 'rgb(var(--surface) / <alpha-value>)',
					muted: 'rgb(var(--surface-muted) / <alpha-value>)',
					elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
				},
				ink: {
					DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
					muted: 'rgb(var(--ink-muted) / <alpha-value>)',
					faint: 'rgb(var(--ink-faint) / <alpha-value>)',
				},
				border: {
					DEFAULT: 'rgb(var(--border) / <alpha-value>)',
					strong: 'rgb(var(--border-strong) / <alpha-value>)',
				},
			},
			fontFamily: {
				sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['var(--font-display)', 'var(--font-sans)', 'sans-serif'],
				mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-brand':
					'linear-gradient(135deg, rgb(var(--grad-from)) 0%, rgb(var(--grad-to)) 100%)',
				'gradient-mesh':
					'radial-gradient(at 20% 10%, rgb(var(--grad-from) / 0.35) 0px, transparent 50%), radial-gradient(at 80% 90%, rgb(var(--grad-to) / 0.3) 0px, transparent 55%)',
			},
			boxShadow: {
				glass: '0 8px 32px 0 rgb(var(--shadow) / 0.37)',
				'glass-sm': '0 4px 16px 0 rgb(var(--shadow) / 0.25)',
				glow: '0 0 24px 0 rgb(var(--grad-to) / 0.35)',
			},
			backdropBlur: {
				xs: '2px',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(8px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' },
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' },
				},
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				shimmer: 'shimmer 2s linear infinite',
				'gradient-x': 'gradient-x 6s ease infinite',
				float: 'float 4s ease-in-out infinite',
				blink: 'blink 1s step-end infinite',
			},
		},
	},
	plugins: [],
};
export default config;
