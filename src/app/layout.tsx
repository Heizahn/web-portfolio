import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import ParticlesBack from '@/components/particles/ParticlesBack';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Portafolio - Humberto Bracho',
	description: 'Mi portal personal donde comparto mis proyectos y experiencias.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es' className='scroll-smooth'>
			<body className={roboto.className}>
				<ParticlesBack />
				{children}
			</body>
		</html>
	);
}
