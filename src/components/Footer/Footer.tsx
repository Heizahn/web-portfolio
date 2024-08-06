import { LinkedIn } from '@/env/env';

export default function Footer() {
	return (
		<footer className='opacity-80 m-4 mt-16 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mb-10 flex justify-center'>
			<div className='rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4'>
				<span className='text-sm sm:text-center text-zinc-800/90 dark:text-zinc-200/90'>
					© 2024{' '}
					<a className='hover:underline' target='_blank' href={LinkedIn}>
						Heizahn
					</a>
					. Casi todos los derechos reservados{' '}
				</span>
				<ul className='flex flex-wrap items-center mt-3 text-sm font-medium dark:text-white/90 sm:mt-0'>
					<li>
						<a className='hover:underline me-4 md:me-6' href='#about'>
							Sobre mi
						</a>
					</li>
					<li>Contacto</li>
				</ul>
			</div>
		</footer>
	);
}
