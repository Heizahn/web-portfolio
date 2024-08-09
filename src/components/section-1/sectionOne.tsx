import ContactLinkedIn from '@/components/Contact/contact_linkedIn';
import { Github, LinkedIn, MAILTO } from '@/env/env';
import { EmailIcon, LinkedInIcon } from '../icons/icons';

const linkStyle =
	'inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black';
export default function SectionOne() {
	return (
		<section className='py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<div className='max-w-xl'>
				<div className='flex gap-4 mb-4'>
					<ContactLinkedIn />
				</div>
				<h2 className='text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white'>
					Hola, soy Humberto
				</h2>
				<p className='mt-6 text-xl text-gray-800 dark:[&>strong]:text-purple-700 [&>strong]:text-purple-700 [&>strong]:font-semibold dark:text-gray-300'>
					+1 año de estudio autodidacta.{' '}
					<strong>
						<a target='_blank' href={Github}>
							React Developer
						</a>
					</strong>
					, manejo de tecnologías como Next-js y React-native con Expo, Especializado en
					el desarrollo web front-end egresado de Soy-Henry.
				</p>
				<nav className='flex flex-wrap gap-4 mt-8'>
					<a className={linkStyle} href={MAILTO}>
						<EmailIcon />
						Contácteme
					</a>
					<a className={linkStyle} target='_blank' href={LinkedIn}>
						<LinkedInIcon /> Linked In
					</a>
				</nav>
			</div>
		</section>
	);
}
