'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import data from './data.json';
import useLang from '../hooks/useLang';

type NavKey = 'study' | 'github' | 'projects' | 'about' | 'contact';

const NAV: { id: NavKey; href: string }[] = [
	{ id: 'study', href: '#study' },
	{ id: 'github', href: '#github' },
	{ id: 'projects', href: '#projects' },
	{ id: 'about', href: '#about' },
	{ id: 'contact', href: '#contact' },
];

export default function Navbar() {
	const { lang } = useLang();
	const [active, setActive] = useState<NavKey | ''>('');
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id as NavKey);
					}
				});
			},
			{ rootMargin: '-40% 0px -50% 0px', threshold: 0 },
		);

		NAV.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [open]);

	const close = () => setOpen(false);

	return (
		<>
			<header className='sticky top-2 z-30 w-full mt-2 flex justify-center'>
				<div className='w-fit md:w-full md:mx-auto md:container md:max-w-2xl lg:max-w-4xl'>
					<nav className='glass rounded-full flex items-center justify-between gap-1 px-2 py-1.5 md:px-3 md:py-2'>
						{/* Desktop nav */}
						<ul className='hidden md:flex items-center gap-1 text-sm font-medium mx-auto'>
							{NAV.map(({ id, href }) => (
								<li key={id} className='relative'>
									<Link
										href={href}
										className={`relative inline-block px-4 py-2 rounded-full transition-colors ${
											active === id ? 'text-white' : 'text-ink hover:text-ink'
										}`}
									>
										{active === id && (
											<motion.span
												layoutId='nav-active'
												className='absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 shadow-glow'
												transition={{ type: 'spring', stiffness: 380, damping: 30 }}
											/>
										)}
										{data[lang][id]}
									</Link>
								</li>
							))}
						</ul>

						{/* Mobile hamburger */}
						<button
							type='button'
							onClick={() => setOpen((o) => !o)}
							aria-expanded={open}
							aria-controls='mobile-menu'
							aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
							className='md:hidden ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:bg-surface-muted'
						>
							<AnimatePresence mode='wait' initial={false}>
								<motion.span
									key={open ? 'x' : 'menu'}
									initial={{ rotate: -90, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									exit={{ rotate: 90, opacity: 0 }}
									transition={{ duration: 0.18 }}
									className='text-xl'
								>
									{open ? <FiX /> : <FiMenu />}
								</motion.span>
							</AnimatePresence>
						</button>
					</nav>
				</div>
			</header>

			{/* Mobile overlay menu */}
			<AnimatePresence>
				{open && (
					<motion.div
						key='backdrop'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className='fixed inset-0 z-40 md:hidden bg-surface/70 backdrop-blur-xl'
						onClick={close}
					>
						<motion.nav
							id='mobile-menu'
							key='menu'
							initial={{ y: -16, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -16, opacity: 0 }}
							transition={{ duration: 0.22, ease: 'easeOut' }}
							onClick={(e) => e.stopPropagation()}
							className='mx-4 mt-24 rounded-2xl glass p-4'
						>
							<ul className='flex flex-col gap-2 text-lg font-display'>
								{NAV.map(({ id, href }, i) => (
									<motion.li
										key={id}
										initial={{ opacity: 0, x: -12 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.05 + i * 0.06, duration: 0.25 }}
									>
										<Link
											href={href}
											onClick={close}
											className={`block px-4 py-3 rounded-xl transition ${
												active === id
													? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-glow'
													: 'text-ink hover:bg-surface-muted'
											}`}
										>
											{data[lang][id]}
										</Link>
									</motion.li>
								))}
							</ul>
						</motion.nav>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
