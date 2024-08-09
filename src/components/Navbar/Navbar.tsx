import { MAILTO } from '@/env/env';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

export default function Navbar({ inView }: { inView: string }) {
	return (
		<header className='sticky top-[-1px] z-10 flex items-center justify-center w-full dark:bg-black md:mb-10'>
			<nav className='flex py-2 w-full text-base md:text-lg font-semibold  text-gray-600 dark:text-gray-200 justify-between items-center  md:py-3	md:max-w-4xl'>
				<Link href='/#study' className={inView === 'study' ? 'text-purple-700' : ''}>
					Estudios
				</Link>

				<Link
					href='/#projects'
					className={inView === 'projects' ? 'text-purple-700' : ''}
				>
					Proyectos
				</Link>

				<Link href='/#about' className={inView === 'about' ? 'text-purple-700' : ''}>
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
