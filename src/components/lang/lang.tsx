'use client';

import type { Lang } from '@/components/context/lang-context';
import useLang from '../hooks/useLang';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlagGB, FlagVE } from '../icons/flags';
import { FiChevronDown } from 'react-icons/fi';

const optionsLangs = [
	{ lang: 'es' as const, label: 'Español', Flag: FlagVE },
	{ lang: 'en' as const, label: 'English', Flag: FlagGB },
];

export default function Lang() {
	const { lang, setLang } = useLang();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!open) return;
		const onClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('mousedown', onClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onClick);
			document.removeEventListener('keydown', onKey);
		};
	}, [open]);

	const current = optionsLangs.find((o) => o.lang === lang) ?? optionsLangs[0];
	const CurrentFlag = current.Flag;

	return (
		<div ref={ref} className='fixed top-4 left-4 md:top-3 md:left-6 z-50'>
			<button
				type='button'
				onClick={() => setOpen(!open)}
				aria-haspopup='listbox'
				aria-expanded={open}
				aria-label={`Idioma: ${current.label}`}
				className='inline-flex items-center gap-2 h-10 px-3 rounded-full glass-sm text-ink text-sm font-medium transition hover:scale-[1.03] hover:shadow-glow'
			>
				<CurrentFlag className='w-5 h-auto rounded-sm ring-1 ring-border' />
				<span className='uppercase tracking-wide'>{lang}</span>
				<FiChevronDown
					className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
				/>
			</button>

			<AnimatePresence>
				{open && (
					<motion.ul
						role='listbox'
						initial={{ opacity: 0, y: -8, scale: 0.96 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -8, scale: 0.96 }}
						transition={{ duration: 0.18 }}
						className='absolute mt-2 left-0 min-w-[150px] glass rounded-xl p-1 overflow-hidden'
					>
						{optionsLangs.map(({ lang: code, label, Flag }) => {
							const active = code === lang;
							return (
								<li key={code}>
									<button
										type='button'
										role='option'
										aria-selected={active}
										onClick={() => {
											setLang(code as Lang);
											setOpen(false);
										}}
										className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-ink transition ${
											active
												? 'bg-gradient-to-r from-brand-500/20 to-accent-500/20 font-semibold'
												: 'hover:bg-surface-muted'
										}`}
									>
										<Flag className='w-5 h-auto rounded-sm ring-1 ring-border' />
										<span>{label}</span>
									</button>
								</li>
							);
						})}
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
}
