'use client';

import { MAILTO } from '@/env/env';
import './navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
	return (
		<header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 '>
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
