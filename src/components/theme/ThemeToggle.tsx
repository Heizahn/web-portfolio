'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ className = '' }: { className?: string }) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	const isDark = mounted && resolvedTheme === 'dark';
	const toggle = () => setTheme(isDark ? 'light' : 'dark');

	return (
		<button
			type='button'
			onClick={toggle}
			aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
			aria-pressed={isDark}
			className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full glass-sm transition-all duration-300 hover:scale-110 hover:shadow-glow ${className}`}
		>
			<AnimatePresence mode='wait' initial={false}>
				{mounted && (
					<motion.span
						key={isDark ? 'moon' : 'sun'}
						initial={{ y: -8, opacity: 0, rotate: -90 }}
						animate={{ y: 0, opacity: 1, rotate: 0 }}
						exit={{ y: 8, opacity: 0, rotate: 90 }}
						transition={{ duration: 0.25 }}
						className='text-lg'
					>
						{isDark ? <FiMoon className='text-accent-300' /> : <FiSun className='text-amber-500' />}
					</motion.span>
				)}
			</AnimatePresence>
		</button>
	);
}
