import Link from 'next/link';
import Illustration from '@/components/ds/Illustration';

export default function NotFound() {
	return (
		<main className='px-4 flex flex-col w-full min-h-screen justify-center items-center text-center gap-4'>
			<Illustration name='anvil-404' priority className='w-full max-w-md h-auto' />
			<p className='font-mono text-sm uppercase tracking-[0.2em] text-ember'>Error 404</p>
			<h1 className='font-display text-4xl md:text-6xl font-extrabold text-ink text-balance'>
				Esta página aún está en la forja
			</h1>
			<p className='text-base md:text-lg text-ink-muted max-w-md text-pretty'>
				La ruta que buscas no existe. This page doesn&apos;t exist yet.
			</p>
			<Link
				href='/'
				className='mt-4 inline-flex items-center gap-2 rounded-full bg-molten px-6 py-3 font-medium shadow-ember transition hover:brightness-110'
			>
				Volver al inicio
			</Link>
		</main>
	);
}
