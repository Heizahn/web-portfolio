'use client';
import Image from 'next/image';
import { UserIcon } from '../icons/icons';
import profileImg from './me.png';
import data from './data.json';
import useLang from '../hooks/useLang';

export default function SectionAbout() {
	const { lang } = useLang();
	return (
		<section className='w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<h2 className='flex items-center mb-6 text-3xl gap-x-3 font-semibold text-white'>
				<UserIcon />
				{data[lang].title}
			</h2>
			<article className='flex flex-col text-base lg:text-xl items-center justify-center gap-8 text-gray-300 md:flex-row'>
				<div className='[&>p]:mb-4  [&>p>strong]:text-purple-600 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1 text-justify'>
					<p>{data[lang].about.p1}</p>
					<p>{data[lang].about.p2}</p>
					<div className='mt-6'>
						<span className='text-xl md:text-2xl font-bold'>{data[lang].about.p3}</span>
						&#160;
						<span className='text-purple-700 '>{data[lang].about.skills.join(', ')}.</span>
					</div>
					<div className='mt-6'>
						<span className='text-xl md:text-2xl font-bold'>{data[lang].about.p4}</span>
						&#160;
						<span className='text-purple-700 '>{data[lang].about.softSkills.join(', ')}.</span>
					</div>
				</div>

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
