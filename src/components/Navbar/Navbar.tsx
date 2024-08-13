import { MAILTO } from '@/env/env';
import Link from 'next/link';
import { MdEmail } from 'react-icons/md';

export default function Navbar({ inView }: { inView: string }) {
	return (
		<header className='sticky top-[-1px] z-10 flex items-center justify-center w-full  md:mb-10'>
			<nav className='flex py-2 w-full text-base md:text-lg font-semibold  text-gray-600 dark:text-gray-200 justify-between items-center  md:py-3	md:max-w-4xl'>
				<Link
					href='/#study'
					className={
						inView === 'study'
							? 'bg-purple-700 text-white px-2 py-1 rounded-lg md:px-4 md:py-2 '
							: 'px-2 py-1 md:px-4 md:py-2'
					}
				>
					Estudios
				</Link>

				<Link
					href='/#projects'
					className={
						inView === 'projects'
							? 'bg-purple-700 text-white px-2 py-1 rounded-lg md:px-4 md:py-2'
							: 'px-2 py-1 md:px-4 md:py-2'
					}
				>
					Proyectos
				</Link>

				<Link
					href='/#about'
					className={
						inView === 'about'
							? 'bg-purple-700 text-white px-2 py-1 rounded-lg md:px-4 md:py-2 '
							: 'px-2 py-1 md:px-4 md:py-2'
					}
				>
					Sobre mi
				</Link>

				<a
					href={MAILTO}
					className='text-2xl md:flex items-center gap-2 px-2 py-1 md:px-4 md:py-2'
				>
					<MdEmail />
					<span className='hidden md:block md:text-lg'>Contácteme</span>
				</a>
			</nav>
		</header>
	);
}
