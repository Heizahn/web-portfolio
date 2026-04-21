'use client';

import { useEffect, useState } from 'react';

interface TypewriterTextProps {
	words: string[];
	typeSpeed?: number;
	deleteSpeed?: number;
	pauseTime?: number;
	className?: string;
	cursorClassName?: string;
}

export default function TypewriterText({
	words,
	typeSpeed = 80,
	deleteSpeed = 40,
	pauseTime = 1800,
	className = '',
	cursorClassName = 'bg-current',
}: TypewriterTextProps) {
	const [idx, setIdx] = useState(0);
	const [text, setText] = useState('');
	const [deleting, setDeleting] = useState(false);

	useEffect(() => {
		if (!words.length) return;
		const current = words[idx % words.length];

		if (!deleting && text === current) {
			const timer = setTimeout(() => setDeleting(true), pauseTime);
			return () => clearTimeout(timer);
		}

		if (deleting && text === '') {
			setDeleting(false);
			setIdx((prev) => (prev + 1) % words.length);
			return;
		}

		const delay = deleting ? deleteSpeed : typeSpeed;
		const timer = setTimeout(() => {
			setText(
				deleting
					? current.substring(0, text.length - 1)
					: current.substring(0, text.length + 1),
			);
		}, delay);

		return () => clearTimeout(timer);
	}, [text, deleting, idx, words, typeSpeed, deleteSpeed, pauseTime]);

	return (
		<span className={className} aria-live='polite'>
			<span>{text}</span>
			<span
				aria-hidden='true'
				className={`inline-block w-[2px] h-[1em] ml-1 align-middle animate-blink ${cursorClassName}`}
			/>
		</span>
	);
}
