import { LinkedIn, MAILTO } from '@/env/env';
import { EmailIcon } from '../icons/icons';

export default function Footer() {
	return (
		<footer className='opacity-80 mt-16 mb-3 w-full mx-auto container lg:max-w-4xl md:max-w-2xl  md:mb-5 flex justify-center'>
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
						<a href={MAILTO} className='flex justify-center gap-2 items-center'>
							<EmailIcon />
							Contacto
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
