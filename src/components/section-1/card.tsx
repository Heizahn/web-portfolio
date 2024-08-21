'use client';
import data from './data.json';
import useLang from '../hooks/useLang';
import { Github, LinkedIn, MAILTO } from '@/env/env';
import { EmailIcon, LinkedInIcon } from '../icons/icons';

const linkStyle =
	'inline-flex items-center justify-center gap-2 px-4 py-1 transition border rounded-full bg-gray-800 border-gray-600 text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black';

export default function Card() {
	const { lang } = useLang();
	return (
		<>
			<h2 className='text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl'>{data[lang].title}</h2>
			<p className='mt-6 text-xl text-gray-200 [&>strong]:text-purple-700 [&>strong]:font-semibold text-justify'>
				{data[lang].description}
			</p>
			<nav className='flex flex-wrap gap-4 mt-8'>
				<a className={linkStyle} href={MAILTO}>
					<EmailIcon />
					{data[lang].contact}
				</a>
				<a className={linkStyle} target='_blank' href={LinkedIn}>
					<LinkedInIcon /> Linked In
				</a>
			</nav>
		</>
	);
}
