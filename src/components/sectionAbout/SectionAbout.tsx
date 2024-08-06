import Image from 'next/image';
import { UserIcon } from '../icons/icons';
import profileImg from './me.png';
import LinkTech from './LinkTech';

export default function SectionAbout() {
	return (
		<section
			id='about'
			className='section undefined  w-full  mx-auto container lg:max-w-4xl md:max-w-2xl'
		>
			<h2 className='flex items-center mb-6 text-3xl gap-x-3 font-semibold text-black/80 dark:text-white'>
				<UserIcon />
				Sobre mi
			</h2>
			<article className='flex flex-col text-base lg:text-xl items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row'>
				<div className='[&>p]:mb-4 [&>p>strong]:text-purple-800 dark:[&>p>strong]:text-purple-600 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1 '>
					<p>
						Me llamo Humberto Bracho pero mis amigos me dicen Heizahn, Empece en la
						programación hace más de 2 años aprendiendo por cuenta propia. Actualmente me
						encuentro cursando el <strong>Modulo 4 del Bootcamp (Soy Henry)</strong> para
						dar un salto en el mundo tech.
					</p>
					<p>
						Poseo conocimientos en las siguientes tecnologías del desarrollo web: &#160;
						<strong>
							<LinkTech href='https://es.react.dev/' title='React' />{' '}
							<LinkTech href='https://redux-toolkit.js.org/' title='Redux-Toolkit' />{' '}
							<LinkTech href='https://reactrouter.com/en/main' title='Redux-Router-Dom' />{' '}
							<LinkTech href='https://formik.org/' title='Formik' />{' '}
							<LinkTech href='https://nextjs.org/' title='Next.js' />{' '}
							<LinkTech href='https://expressjs.com/' title='Express.js' />{' '}
							<LinkTech href='https://www.typescriptlang.org/' title='TypeScript' />{' '}
							<LinkTech href='https://www.mongodb.com/' title='MongoDD' />{' '}
							<LinkTech href='https://www.postgresql.org/' title='PostgreSQL' />{' '}
							<LinkTech href='https://typeorm.io/' title='TypeORM' />
						</strong>
						.
					</p>
				</div>
				{/* order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20  */}
				<Image
					className='order-1 aspect-square object-cover min-w-52 lg:min-w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 rounded-xl bg-black/20 dark:bg-purple-800/5 ring-1 ring-black/70 dark:ring-white/10'
					src={profileImg}
					width={200}
					height={200}
					alt='Humberto Bracho'
				/>
			</article>
		</section>
	);
}
