import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import ParticlesBack from '@/components/particles/ParticlesBack';
import { LangContextProvider } from '@/components/context/lang-context';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Github, LinkedIn, MAILTO } from '@/env/env';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-sans',
	display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-display',
	display: 'swap',
});

const SITE_URL = 'https://heizahn.dev';
const NAME = 'Humberto Bracho';
const ROLE_ES = 'Desarrollador Full Stack — React, Node/Bun, Rust';
const ROLE_EN = 'Full Stack Developer — React, Node/Bun, Rust';
const DESC_ES =
	'Portafolio de Humberto Bracho. Desarrollador Full Stack especializado en interfaces modernas con React/Next.js y backends eficientes en Node.js, Bun y Rust. Disponible para proyectos freelance y remotos.';
const DESC_EN =
	'Portfolio of Humberto Bracho. Full Stack developer focused on modern React/Next.js interfaces and efficient backends in Node.js, Bun and Rust. Available for freelance and remote work.';

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${NAME} — ${ROLE_ES}`,
		template: `%s — ${NAME}`,
	},
	description: DESC_ES,
	applicationName: `${NAME} — Portfolio`,
	authors: [{ name: NAME, url: SITE_URL }],
	creator: NAME,
	publisher: NAME,
	keywords: [
		'Humberto Bracho',
		'Heizahn',
		'Full Stack Developer',
		'Desarrollador Full Stack',
		'React',
		'Next.js',
		'Node.js',
		'Bun',
		'Rust',
		'TypeScript',
		'Portfolio',
		'Freelance',
		'Frontend',
		'Backend',
	],
	alternates: {
		canonical: '/',
		languages: {
			'es-ES': '/',
			'en-US': '/',
		},
	},
	openGraph: {
		type: 'website',
		url: SITE_URL,
		siteName: `${NAME} — Portfolio`,
		title: `${NAME} — ${ROLE_ES}`,
		description: DESC_ES,
		locale: 'es_ES',
		alternateLocale: ['en_US'],
	},
	twitter: {
		card: 'summary_large_image',
		title: `${NAME} — ${ROLE_EN}`,
		description: DESC_EN,
		creator: '@Heizahn',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
	category: 'technology',
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#f8fafc' },
		{ media: '(prefers-color-scheme: dark)', color: '#0b0a18' },
	],
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	colorScheme: 'dark light',
};

const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: NAME,
	alternateName: 'Heizahn',
	url: SITE_URL,
	image: `${SITE_URL}/opengraph-image`,
	jobTitle: ROLE_EN,
	description: DESC_EN,
	email: MAILTO.replace(/^mailto:/, ''),
	sameAs: [Github, LinkedIn],
	knowsAbout: [
		'React',
		'Next.js',
		'TypeScript',
		'Node.js',
		'Bun',
		'Rust',
		'PostgreSQL',
		'Tailwind CSS',
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='es'
			className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
			suppressHydrationWarning
		>
			<head>
				<link rel='preconnect' href='https://avatars.githubusercontent.com' />
				<link rel='dns-prefetch' href='https://api.github.com' />
			</head>
			<body className='font-sans antialiased'>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-500 focus:text-white focus:shadow-glow focus:outline-none'
				>
					Skip to content
				</a>
				<ThemeProvider>
					<ParticlesBack />
					<LangContextProvider>{children}</LangContextProvider>
				</ThemeProvider>
				<Script
					id='person-jsonld'
					type='application/ld+json'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}
