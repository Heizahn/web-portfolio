'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { GlyphSpark } from './glyphs';
import useReducedMotion from './useReducedMotion';

type Line =
	| { kind: 'cmd'; text: string }
	| { kind: 'ai'; text: string }
	| { kind: 'ok'; text: string }
	| { kind: 'diff'; text: string };

const DEFAULT_SCRIPT: Line[] = [
	{ kind: 'cmd', text: 'claude "anima el hero con brasas"' },
	{ kind: 'ai', text: 'Leo src/components/section-1 y propongo un plan…' },
	{ kind: 'diff', text: '+ <TemperText text="Humberto Bracho" />' },
	{ kind: 'diff', text: '+ <EmberField />' },
	{ kind: 'ok', text: '2 archivos editados · revisa el diff' },
	{ kind: 'cmd', text: 'bun run build' },
	{ kind: 'ok', text: 'Compilado en 4.2 s' },
];

const STYLE: Record<Line['kind'], string> = {
	cmd: 'text-ink',
	ai: 'text-spark',
	ok: 'text-verdigris',
	diff: 'text-verdigris/90',
};

const PREFIX: Record<Line['kind'], string> = { cmd: '❯', ai: '', ok: '✓', diff: '' };

/**
 * Terminal de pair programming: escribe una sesión entre tú y Claude
 * carácter a carácter cuando entra en pantalla. Siempre en superficie oscura.
 */
export default function PairTerminal({
	script = DEFAULT_SCRIPT,
	title = 'heizahn@forja: ~/portfolio',
	className = '',
}: {
	script?: Line[];
	title?: string;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: '-80px' });
	const reduced = useReducedMotion();
	const [line, setLine] = useState(0);
	const [chars, setChars] = useState(0);

	useEffect(() => {
		if (reduced) {
			setLine(script.length);
			return;
		}
		if (!inView || line >= script.length) return;
		const current = script[line];
		const speed = current.kind === 'cmd' ? 38 : 14;
		if (chars < current.text.length) {
			const t = setTimeout(() => setChars((c) => c + 1), speed);
			return () => clearTimeout(t);
		}
		const t = setTimeout(() => {
			setLine((l) => l + 1);
			setChars(0);
		}, current.kind === 'cmd' ? 420 : 260);
		return () => clearTimeout(t);
	}, [inView, line, chars, script, reduced]);

	return (
		<div
			ref={ref}
			className={`dark overflow-hidden rounded-2xl border border-border bg-surface font-mono text-[13px] leading-relaxed text-ink shadow-glass ${className}`}
		>
			<div className='flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-2.5'>
				<span className='h-3 w-3 rounded-full bg-ember' />
				<span className='h-3 w-3 rounded-full bg-spark' />
				<span className='h-3 w-3 rounded-full bg-verdigris' />
				<span className='ml-3 truncate text-xs text-ink-faint'>{title}</span>
			</div>
			<div className='min-h-[15rem] space-y-1 p-4' aria-live='polite'>
				{script.slice(0, Math.min(line + 1, script.length)).map((l, i) => {
					const done = i < line;
					const text = done ? l.text : l.text.slice(0, chars);
					return (
						<div key={i} className={`flex gap-2 ${STYLE[l.kind]}`}>
							{l.kind === 'ai' ? (
								<motion.span
									className='mt-[3px] shrink-0 text-ember'
									animate={{ rotate: [0, 90, 180] }}
									transition={{ duration: 2, repeat: done ? 0 : Infinity, ease: 'linear' }}
								>
									<GlyphSpark width={14} height={14} />
								</motion.span>
							) : (
								<span className={`shrink-0 ${l.kind === 'cmd' ? 'text-verdigris' : ''}`}>
									{PREFIX[l.kind]}
								</span>
							)}
							<span className='min-w-0 break-words'>
								{text}
								{!done && <span className='ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-ember' />}
							</span>
						</div>
					);
				})}
				{line >= script.length && (
					<div className='flex gap-2'>
						<span className='text-verdigris'>❯</span>
						<span className='inline-block h-4 w-2 translate-y-1 animate-blink bg-ember' />
					</div>
				)}
			</div>
		</div>
	);
}
