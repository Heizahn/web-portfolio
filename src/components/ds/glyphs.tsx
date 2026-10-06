import type { SVGProps } from 'react';

/*
 * Glifos de Forja: dibujos geométricos originales para cada área del stack.
 * No son logotipos de marcas; son símbolos propios, libres de usar (CC0).
 * Heredan el color con currentColor.
 */

type P = SVGProps<SVGSVGElement>;
const base = (p: P) => ({
	width: 24,
	height: 24,
	viewBox: '-12 -12 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 2,
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const,
	'aria-hidden': true,
	...p,
});

/** Interfaz (React / Next.js): corchetes angulares */
export const GlyphUI = (p: P) => (
	<svg {...base(p)}>
		<path d='M-4 -7 l-6 7 l6 7 M4 -7 l6 7 l-6 7' />
	</svg>
);

/** Tipos (TypeScript): una T sobre una línea base */
export const GlyphTypes = (p: P) => (
	<svg {...base(p)}>
		<path d='M-7 -7 h14 M0 -7 v12 M-8 9 h16' />
	</svg>
);

/** Sistemas (Rust): engranaje de cuatro dientes */
export const GlyphSystems = (p: P) => (
	<svg {...base(p)}>
		<circle r='5' />
		<path d='M0 -10 v3 M0 7 v3 M-10 0 h3 M7 0 h3 M-7 -7 l2 2 M5 5 l2 2 M7 -7 l-2 2 M-5 5 l-2 2' />
	</svg>
);

/** Runtime (Node.js): hexágono */
export const GlyphRuntime = (p: P) => (
	<svg {...base(p)}>
		<path d='M0 -10 l8.7 5 v10 l-8.7 5 l-8.7 -5 v-10 z' />
	</svg>
);

/** Bun: un pan redondo */
export const GlyphBun = (p: P) => (
	<svg {...base(p)}>
		<path d='M-9 3 a9 7.5 0 0 1 18 0 a2 2 0 0 1 -2 2 h-14 a2 2 0 0 1 -2 -2z' />
		<path d='M-3 -1 v.01 M3 -1 v.01' strokeWidth={2.6} />
	</svg>
);

/** Datos (PostgreSQL): cilindro de base de datos */
export const GlyphData = (p: P) => (
	<svg {...base(p)}>
		<ellipse cx='0' cy='-6' rx='8' ry='3' />
		<path d='M-8 -6 v12 a8 3 0 0 0 16 0 v-12 M-8 0 a8 3 0 0 0 16 0' />
	</svg>
);

/** Estilos (Tailwind CSS): dos ondas */
export const GlyphStyles = (p: P) => (
	<svg {...base(p)}>
		<path d='M-10 -3 q5 -6 10 0 t10 0 M-10 5 q5 -6 10 0 t10 0' />
	</svg>
);

/** IA en pareja (Claude): chispa de cuatro puntas */
export const GlyphSpark = (p: P) => (
	<svg {...base(p)}>
		<path d='M0 -10 C1.6 -2.5 2.5 -1.6 10 0 C2.5 1.6 1.6 2.5 0 10 C-1.6 2.5 -2.5 1.6 -10 0 C-2.5 -1.6 -1.6 -2.5 0 -10 Z' />
	</svg>
);

/** Git: rama que se fusiona */
export const GlyphBranch = (p: P) => (
	<svg {...base(p)}>
		<circle cx='-5' cy='-7' r='2.5' />
		<circle cx='-5' cy='7' r='2.5' />
		<circle cx='6' cy='-2' r='2.5' />
		<path d='M-5 -4.5 v9 M6 0.5 q0 5 -9 6' />
	</svg>
);

export const STACK = [
	{ name: 'React', area: 'Interfaz', Glyph: GlyphUI },
	{ name: 'Next.js', area: 'Interfaz', Glyph: GlyphUI },
	{ name: 'TypeScript', area: 'Tipos', Glyph: GlyphTypes },
	{ name: 'Tailwind CSS', area: 'Estilos', Glyph: GlyphStyles },
	{ name: 'Node.js', area: 'Runtime', Glyph: GlyphRuntime },
	{ name: 'Bun', area: 'Runtime', Glyph: GlyphBun },
	{ name: 'Rust', area: 'Sistemas', Glyph: GlyphSystems },
	{ name: 'PostgreSQL', area: 'Datos', Glyph: GlyphData },
	{ name: 'Git', area: 'Flujo', Glyph: GlyphBranch },
	{ name: 'Claude', area: 'Pareja IA', Glyph: GlyphSpark },
] as const;
