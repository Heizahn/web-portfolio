'use client';

import { STACK } from './glyphs';
import TechChip from './TechChip';

const TONE_BY_AREA: Record<string, 'ember' | 'verdigris' | 'flame' | 'neutral'> = {
	Interfaz: 'flame',
	Tipos: 'flame',
	Estilos: 'verdigris',
	Runtime: 'verdigris',
	Sistemas: 'ember',
	Datos: 'neutral',
	Flujo: 'neutral',
	'Pareja IA': 'ember',
};

/**
 * Cinta infinita con el stack. Se detiene al pasar el cursor y se desvanece
 * en los bordes con una máscara.
 */
export default function TechMarquee({ className = '' }: { className?: string }) {
	const items = [...STACK, ...STACK];
	return (
		<div
			className={`group relative w-full min-w-0 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] ${className}`}
			aria-label={`Stack: ${STACK.map((s) => s.name).join(', ')}`}
			role='img'
		>
			<div className='flex w-max animate-marquee gap-3 py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none'>
				{items.map(({ name, area, Glyph }, i) => (
					<TechChip key={`${name}-${i}`} label={name} Glyph={Glyph} tone={TONE_BY_AREA[area]} />
				))}
			</div>
		</div>
	);
}
