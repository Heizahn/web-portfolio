'use client';

import { MAILTO } from '@/env/env';
import './navbar.css';
import { Link } from 'react-scroll';
import { MdEmail } from 'react-icons/md';

export default function Navbar() {
	return (
		<header className='sticky top-[-1px] z-10 flex items-center justify-center w-full dark:bg-black md:mb-10'>
			<nav className='flex w-full py-2 text-base md:text-lg font-semibold  text-gray-600 dark:text-gray-200 justify-between items-center  md:py-2	md:max-w-4xl'>
				<Link to='study' smooth={true} spy={true} activeClass='text-purple-600'>
					Estudios
				</Link>

				<Link to='projects' smooth={true} spy={true} activeClass='text-purple-600'>
					Proyectos
				</Link>

				<Link to='about' smooth={true} spy={true} activeClass='text-purple-600'>
					Sobre mi
				</Link>

				<a href={MAILTO} className='text-2xl md:flex items-center gap-2	'>
					<MdEmail />
					<span className='hidden md:block md:text-lg'>Contácteme</span>
				</a>
			</nav>
		</header>
	);
}
