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
				// Brasa: acento principal (naranja forja)
				brand: {
					50: '#fff4ed',
					100: '#ffe6d4',
					200: '#ffc9a8',
					300: '#ffa371',
					400: '#ff8a4c',
					500: '#f2661f',
					600: '#c2410c',
					700: '#9a3412',
					800: '#7c2d12',
					900: '#5f230e',
					950: '#341006',
				},
				// Cardenillo: acento secundario (pátina del cobre)
				accent: {
					50: '#effefb',
					100: '#c8fff3',
					200: '#92fee8',
					300: '#5ef0d6',
					400: '#3fd0b5',
					500: '#14b39a',
					600: '#0f766e',
					700: '#115e59',
					800: '#134e4a',
					900: '#123f3c',
					950: '#042f2e',
				},
				ember: 'rgb(var(--ember) / <alpha-value>)',
				spark: 'rgb(var(--spark) / <alpha-value>)',
				verdigris: 'rgb(var(--verdigris) / <alpha-value>)',
				flame: 'rgb(var(--flame) / <alpha-value>)',
				'on-ember': 'rgb(var(--on-ember) / <alpha-value>)',
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
				mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
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
				glow: '0 0 24px 0 rgb(var(--ember) / 0.35)',
				ember: '0 0 0 1px rgb(var(--ember) / 0.4), 0 8px 40px -8px rgb(var(--ember) / 0.55)',
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
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
				'heat-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			transitionTimingFunction: {
				forge: 'cubic-bezier(0.22, 1, 0.36, 1)',
				strike: 'cubic-bezier(0.7, 0, 0.3, 1)',
				spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
				shimmer: 'shimmer 2s linear infinite',
				'gradient-x': 'gradient-x 6s ease infinite',
				float: 'float 4s ease-in-out infinite',
				blink: 'blink 1s step-end infinite',
				marquee: 'marquee 32s linear infinite',
				'heat-shift': 'heat-shift 5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
export default config;
