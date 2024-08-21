'use client';
import { LinkedIn, MAILTO } from '@/env/env';
import { EmailIcon } from '../icons/icons';
import data from './data.json';
import useLang from '../hooks/useLang';

export default function Footer() {
	const { lang } = useLang();
	return (
		<footer className='opacity-80 mt-16 mb-3 w-full mx-auto container lg:max-w-4xl md:max-w-2xl  md:mb-5 flex justify-center'>
			<div className='rounded-lg w-full max-w-screen-xl mx-auto md:flex md:items-center md:justify-between py-4'>
				<span className='text-sm sm:text-center text-zinc-200/90'>
					© 2024{' '}
					<a className='hover:underline' target='_blank' href={LinkedIn}>
						Heizahn
					</a>
					{data[lang].copyright}
				</span>
				<ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-white/90 sm:mt-0'>
					<li>
						<a href={MAILTO} className='flex justify-center gap-2 items-center'>
							<EmailIcon />
							{data[lang].contact}
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
