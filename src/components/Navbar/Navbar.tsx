'use client';

import { MAILTO } from '@/env/env';
import './navbar.css';
import { Link } from 'react-scroll';
import { MdEmail } from 'react-icons/md';

import LinkNext from 'next/link';
export default function Navbar() {
	return (
		<header className='hidden md:fixed top-0 z-10 md:flex items-center justify-center w-full mx-auto mt-2 '>
			<nav className='flex px-3 font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center dark:bg-slate-800'>
				<Link
					className='links-navbar'
					to='study'
					smooth={true}
					spy={true}
					activeClass='text-purple-600'
				>
					Estudios
				</Link>

				<Link
					className='links-navbar'
					to='projects'
					smooth={true}
					spy={true}
					activeClass='text-purple-600'
				>
					Proyectos
				</Link>

				<Link
					className='links-navbar'
					to='about'
					smooth={true}
					spy={true}
					activeClass='text-purple-600'
				>
					Sobre mi
				</Link>

				<a className='links-navbar' href={MAILTO} aria-label='contact'>
					Contacto
				</a>
			</nav>
		</header>
	);
}

export function NavbarMobile() {
	return (
		<header className='sticky top-[-1px] z-10 flex items-center justify-center w-full  md:hidden'>
			<nav className='flex w-full py-2 text-base font-semibold  text-gray-600 dark:text-gray-200 justify-around items-center dark:bg-black'>
				<Link to='study' smooth={true} spy={true} activeClass='text-purple-500'>
					Estudios
				</Link>

				<Link to='projects' smooth={true} spy={true} activeClass='text-purple-500'>
					Proyectos
				</Link>

				<Link to='about' smooth={true} spy={true} activeClass='text-purple-500'>
					Sobre mi
				</Link>

				<a href={MAILTO} className='text-2xl'>
					<MdEmail />
				</a>
			</nav>
		</header>
	);
}
