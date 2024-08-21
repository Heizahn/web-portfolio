'use client';

import type { Lang } from '@/components/context/lang-context';
import useLang from '../hooks/useLang';
import { useState } from 'react';
import { motion } from 'framer-motion';

const optionsLangs = [
	{
		lang: 'es',
		icon: '🇻🇪',
	},
	{
		lang: 'en',
		icon: '🇬🇧',
	},
];

export default function Lang() {
	const { lang, setLang } = useLang();
	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className='block md:fixed md:top-0 md:left-20 z-50 w-auto'>
			<button className='text-4xl z-50' onClick={() => setShowOptions(!showOptions)}>
				<span>{optionsLangs.find((option) => option.lang === lang)?.icon}</span>
				<motion.div
					className='absolute z-10 flex text-2xl flex-col gap-y-2 p-1 bg-gray-800/90 rounded-b-lg'
					initial={{ scale: 0, y: -50, x: -50, opacity: 0 }}
					animate={
						showOptions
							? { scale: 1, y: 0, x: 0, opacity: 1, transition: { delay: 0.1, duration: 0.3 } }
							: { scale: 0, y: -50, x: -50, opacity: 0, transition: { delay: 0.1, duration: 0.3 } }
					}
				>
					{optionsLangs.map((option) => (
						<a
							key={option.lang}
							onClick={() => setLang(option.lang as Lang)}
							className={`flex justify-center items-center gap-x-2 p-2 rounded-md hover:bg-gray-600 ${
								option.lang === lang ? 'bg-gray-600' : ''
							}`}
						>
							{option.icon} <span>{option.lang.toUpperCase()}</span>
						</a>
					))}
				</motion.div>
			</button>
		</div>
	);
}
