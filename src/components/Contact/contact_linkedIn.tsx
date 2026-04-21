'use client';
import { LinkedIn } from '@/env/env';
import useLang from '../hooks/useLang';
import data from './data.json';

export default function ContactLinkedIn() {
	const { lang } = useLang();
	const label = data[lang].availability;
	return (
		<a
			className='flex items-center transition md:justify-center md:hover:scale-105'
			target='_blank'
			rel='noopener noreferrer'
			href={LinkedIn}
			aria-label={label}
		>
			<div className='flex items-center'>
				<span className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
					<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#6366f1_0%,#a855f7_50%,#6366f1_100%)]'></span>
					<div className='inline-flex items-center gap-2 justify-center w-full px-3 py-1 text-sm md:text-base rounded-full cursor-pointer bg-surface-elevated text-ink backdrop-blur-3xl whitespace-nowrap'>
						<span className='relative flex h-2.5 w-2.5'>
							<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping' />
							<span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500' />
						</span>
						{label}
					</div>
				</span>
			</div>
		</a>
	);
}
