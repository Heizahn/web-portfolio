'use client';

import './navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
	return (
		<header className='fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2 '>
			<nav className='flex px-3 font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center dark:bg-slate-800'>
				<Link className='links-navbar' to='study' smooth={true} offset={-60}>
					Estudios
				</Link>

				<Link className='links-navbar' to='project' smooth={true} offset={-40}>
					Proyectos
				</Link>

				<Link className='links-navbar' to='about' smooth={true} offset={-40}>
					Sobre mi
				</Link>

				<a className='links-navbar' href='#' aria-label='contact'>
					Contacto
				</a>
			</nav>
		</header>
	);
}
