'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiDownload, FiZap } from 'react-icons/fi';
import ThemeToggle from '@/components/theme/ThemeToggle';
import {
	GlyphBranch,
	GlyphBun,
	GlyphData,
	GlyphRuntime,
	GlyphSpark,
	GlyphStyles,
	GlyphSystems,
	GlyphTypes,
	GlyphUI,
	ILLUSTRATIONS,
	Illustration,
	PairTerminal,
	Reveal,
	SparkButton,
	SpotlightCard,
	TechChip,
	TechMarquee,
	TemperText,
} from '@/components/ds';

const COLORS = [
	{ name: 'surface', light: '#f4f6f9', dark: '#0e1220', usage: 'Fondo de página' },
	{ name: 'surface-muted', light: '#e9edf2', dark: '#151b2c', usage: 'Bandas, inputs, hover' },
	{ name: 'surface-elevated', light: '#ffffff', dark: '#1b2236', usage: 'Tarjetas y paneles' },
	{ name: 'ink', light: '#111726', dark: '#eef1f6', usage: 'Titulares y texto principal' },
	{ name: 'ink-muted', light: '#3a4458', dark: '#b6bfce', usage: 'Párrafos' },
	{ name: 'ink-faint', light: '#5c6880', dark: '#8792a6', usage: 'Metadatos, placeholders' },
	{ name: 'ember', light: '#c2410c', dark: '#ff8a4c', usage: 'Acento principal, CTA, foco' },
	{ name: 'spark', light: '#a35a00', dark: '#ffd27a', usage: 'Calor máximo, destellos' },
	{ name: 'verdigris', light: '#0f766e', dark: '#3fd0b5', usage: 'Éxito, diff +, secundario' },
	{ name: 'flame', light: '#1d5fd1', dark: '#7ab2ff', usage: 'Enlaces e información' },
];

const TYPE = [
	{ cls: 'font-display text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.02]', label: 'display-xl · Bricolage Grotesque 800 · 72/74', sample: 'Forjo software' },
	{ cls: 'font-display text-4xl font-bold tracking-tight', label: 'display · Bricolage Grotesque 700 · 36/40', sample: 'APIs rápidas, interfaces vivas' },
	{ cls: 'font-display text-2xl font-semibold', label: 'title · Bricolage Grotesque 600 · 24/32', sample: 'Proyectos destacados' },
	{ cls: 'text-lg text-ink-muted', label: 'body-lg · Instrument Sans 400 · 18/28', sample: 'Construyo APIs rápidas, paneles administrativos y aplicaciones web instalables.' },
	{ cls: 'text-base text-ink-muted', label: 'body · Instrument Sans 400 · 16/24', sample: 'Me obsesiona la claridad del código y la performance real.' },
	{ cls: 'font-mono text-sm text-ember', label: 'mono · JetBrains Mono 500 · 14/20', sample: '❯ bun run build — compilado en 4.2 s' },
	{ cls: 'font-mono text-xs uppercase tracking-[0.2em] text-ink-faint', label: 'eyebrow · JetBrains Mono 500 · 12/16 +0.2em', sample: 'Trayectoria' },
];

const CURVES = [
	{ name: 'forge', value: 'cubic-bezier(0.22, 1, 0.36, 1)', ease: [0.22, 1, 0.36, 1], usage: 'Entradas y reveals. Rápido al principio, se asienta suave.' },
	{ name: 'strike', value: 'cubic-bezier(0.7, 0, 0.3, 1)', ease: [0.7, 0, 0.3, 1], usage: 'Cambios de estado y martillazos: carga y golpe.' },
	{ name: 'spring', value: 'cubic-bezier(0.34, 1.56, 0.64, 1)', ease: [0.34, 1.56, 0.64, 1], usage: 'Pops de nodos, chips y feedback con rebote.' },
] as const;

const GLYPHS = [
	{ name: 'Interfaz', Glyph: GlyphUI },
	{ name: 'Tipos', Glyph: GlyphTypes },
	{ name: 'Estilos', Glyph: GlyphStyles },
	{ name: 'Runtime', Glyph: GlyphRuntime },
	{ name: 'Bun', Glyph: GlyphBun },
	{ name: 'Sistemas', Glyph: GlyphSystems },
	{ name: 'Datos', Glyph: GlyphData },
	{ name: 'Git', Glyph: GlyphBranch },
	{ name: 'Pareja IA', Glyph: GlyphSpark },
];

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
	return (
		<section id={id} className='scroll-mt-12 py-16 border-t border-border'>
			<Reveal>
				<p className='font-mono text-xs uppercase tracking-[0.2em] text-ember mb-2'>{eyebrow}</p>
				<h2 className='font-display text-3xl md:text-4xl font-bold tracking-tight text-ink text-balance mb-8'>{title}</h2>
			</Reveal>
			{children}
		</section>
	);
}

function CurveDemo({ name, value, ease, usage }: (typeof CURVES)[number]) {
	const [run, setRun] = useState(0);
	return (
		<button
			type='button'
			onClick={() => setRun((r) => r + 1)}
			className='group text-left rounded-2xl border border-border bg-surface-elevated p-5 transition hover:border-ember/50'
		>
			<div className='flex items-baseline justify-between gap-3'>
				<span className='font-display text-lg font-semibold text-ink'>{name}</span>
				<span className='font-mono text-[11px] text-ink-faint'>{value}</span>
			</div>
			<div className='relative mt-5 h-3 rounded-full bg-surface-muted'>
				<motion.span
					key={run}
					className='absolute top-1/2 -mt-3 h-6 w-6 rounded-full bg-molten shadow-ember'
					initial={{ left: '0%' }}
					animate={{ left: 'calc(100% - 1.5rem)' }}
					transition={{ duration: 1.1, ease: ease as unknown as number[] }}
				/>
			</div>
			<p className='mt-4 text-sm text-ink-muted'>{usage}</p>
			<p className='mt-2 font-mono text-xs text-ember opacity-0 transition group-hover:opacity-100'>Clic para repetir</p>
		</button>
	);
}

export default function Showcase() {
	const [temper, setTemper] = useState(0);

	return (
		<main id='main-content' className='px-4'>
			<div className='fixed top-4 right-4 z-50'>
				<ThemeToggle />
			</div>
			<div className='mx-auto max-w-5xl'>
				{/* Hero */}
				<header className='relative pt-16 pb-20'>
					<Link href='/' className='inline-flex items-center gap-2 text-sm text-ink-muted hover:text-ember transition'>
						<FiArrowLeft /> heizahn.dev
					</Link>
					<div className='mt-12 grid items-center gap-10 md:grid-cols-[1.2fr_1fr]'>
						<div>
							<p className='font-mono text-xs uppercase tracking-[0.2em] text-ember'>Design system · v1</p>
							<h1 className='mt-3 font-display text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.95] text-ink'>
								<TemperText key={temper} text='Forja' />
							</h1>
							<p className='mt-6 max-w-md text-lg text-ink-muted text-pretty'>
								El sistema de diseño de Heizahn. Acero frío, brasa encendida y chispas: el taller de un
								desarrollador full stack que programa en pareja con IA.
							</p>
							<div className='mt-8 flex flex-wrap gap-3'>
								<SparkButton onClick={() => setTemper((t) => t + 1)}>
									<FiZap /> Volver a templar
								</SparkButton>
								<SparkButton variant='outline' href='#componentes'>
									Ver componentes
								</SparkButton>
							</div>
						</div>
						<Illustration name='forge-terminal' priority className='w-full h-auto' />
					</div>
				</header>

				<Section id='color' eyebrow='01 · Color' title='Acero, brasa, chispa y cardenillo'>
					<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
						{COLORS.map((c) => (
							<div key={c.name} className='overflow-hidden rounded-xl border border-border bg-surface-elevated'>
								<div className='flex h-20'>
									<div className='flex-1' style={{ background: c.light }} />
									<div className='flex-1' style={{ background: c.dark }} />
								</div>
								<div className='p-3'>
									<p className='font-mono text-sm font-semibold text-ink'>{c.name}</p>
									<p className='font-mono text-[11px] text-ink-faint'>
										{c.light} · {c.dark}
									</p>
									<p className='mt-1 text-xs text-ink-muted'>{c.usage}</p>
								</div>
							</div>
						))}
					</div>
					<p className='mt-6 text-sm text-ink-muted max-w-2xl'>
						Cada muestra enseña el valor claro (izquierda) y oscuro (derecha). Todo texto cumple WCAG AA
						(4.5:1) sobre <code className='font-mono text-ember'>surface</code> y{' '}
						<code className='font-mono text-ember'>surface-elevated</code> en ambos temas. Sobre fondos{' '}
						<code className='font-mono text-ember'>bg-molten</code> el texto usa siempre{' '}
						<code className='font-mono text-ember'>on-ember</code>.
					</p>
				</Section>

				<Section id='tipografia' eyebrow='02 · Tipografía' title='Bricolage para gritar, Instrument para leer'>
					<div className='flex flex-col divide-y divide-border'>
						{TYPE.map((t) => (
							<div key={t.label} className='grid gap-2 py-5 md:grid-cols-[14rem_1fr] md:items-baseline'>
								<span className='font-mono text-[11px] text-ink-faint'>{t.label}</span>
								<span className={`${t.cls} text-balance min-w-0`}>{t.sample}</span>
							</div>
						))}
					</div>
				</Section>

				<Section id='movimiento' eyebrow='03 · Movimiento' title='Tres curvas, una forja'>
					<div className='grid gap-4 md:grid-cols-3'>
						{CURVES.map((c) => (
							<CurveDemo key={c.name} {...c} />
						))}
					</div>
					<ul className='mt-6 grid gap-2 text-sm text-ink-muted md:grid-cols-3'>
						<li><strong className='text-ink'>Micro</strong> 150–250 ms: hover, foco, toggles.</li>
						<li><strong className='text-ink'>Entrada</strong> 500–800 ms con <code className='font-mono text-ember'>forge</code>, escalonado 40–120 ms.</li>
						<li><strong className='text-ink'>Ambiente</strong> 3–30 s en bucle; siempre se apaga con <code className='font-mono text-ember'>prefers-reduced-motion</code>.</li>
					</ul>
				</Section>

				<Section id='componentes' eyebrow='04 · Componentes' title='Piezas con calor propio'>
					<div className='grid gap-6 [&>*]:min-w-0'>
						<div className='rounded-2xl border border-border bg-surface-elevated p-6'>
							<p className='font-mono text-xs text-ink-faint mb-4'>SparkButton · magnético + ráfaga de chispas al hacer clic</p>
							<div className='flex flex-wrap gap-3'>
								<SparkButton>Contrátame</SparkButton>
								<SparkButton variant='outline'>Ver proyectos</SparkButton>
								<SparkButton variant='ghost'>Descargar CV</SparkButton>
							</div>
						</div>

						<div className='grid gap-4 md:grid-cols-3'>
							{[
								{ t: 'API de facturación', d: 'API REST en Bun con PostgreSQL y validación tipada.', chip: 'Bun', G: GlyphBun },
								{ t: 'Panel administrativo', d: 'Next.js con roles, tablas y gráficas en tiempo real.', chip: 'Next.js', G: GlyphUI },
								{ t: 'CLI de despliegue', d: 'Rust. Un binario, cero dependencias en el servidor.', chip: 'Rust', G: GlyphSystems },
							].map((c) => (
								<SpotlightCard key={c.t}>
									<div className='p-6'>
										<TechChip label={c.chip} Glyph={c.G} tone='ember' />
										<h3 className='mt-4 font-display text-xl font-semibold text-ink'>{c.t}</h3>
										<p className='mt-2 text-sm text-ink-muted'>{c.d}</p>
									</div>
								</SpotlightCard>
							))}
						</div>
						<p className='-mt-2 font-mono text-xs text-ink-faint'>SpotlightCard · halo que sigue al cursor, borde encendido e inclinación 3D (ejemplos)</p>

						<div className='rounded-2xl border border-border bg-surface-elevated p-6'>
							<p className='font-mono text-xs text-ink-faint mb-4'>TechChip · tonos ember, verdigris, flame y neutral</p>
							<div className='flex flex-wrap gap-2'>
								<TechChip label='Rust' Glyph={GlyphSystems} tone='ember' />
								<TechChip label='Node.js' Glyph={GlyphRuntime} tone='verdigris' />
								<TechChip label='TypeScript' Glyph={GlyphTypes} tone='flame' />
								<TechChip label='PostgreSQL' Glyph={GlyphData} />
							</div>
							<p className='font-mono text-xs text-ink-faint mt-6 mb-2'>TechMarquee · cinta infinita, se pausa al pasar el cursor</p>
							<TechMarquee />
						</div>

						<div className='grid items-start gap-6 md:grid-cols-2'>
							<div>
								<p className='font-mono text-xs text-ink-faint mb-3'>PairTerminal · sesión tú + Claude, se escribe al entrar en pantalla</p>
								<PairTerminal />
							</div>
							<div>
								<p className='font-mono text-xs text-ink-faint mb-3'>Reveal · rise, blur y forge al hacer scroll</p>
								<div className='grid gap-3'>
									{(['rise', 'blur', 'forge'] as const).map((e, i) => (
										<Reveal key={e} effect={e} delay={i * 0.12}>
											<div className='rounded-xl border border-border bg-surface-elevated p-4'>
												<span className='font-mono text-sm text-ember'>effect=&quot;{e}&quot;</span>
											</div>
										</Reveal>
									))}
								</div>
								<p className='font-mono text-xs text-ink-faint mt-6 mb-2'>EmberField · las brasas del fondo; mueve el cursor para avivarlas</p>
							</div>
						</div>
					</div>
				</Section>

				<Section id='glifos' eyebrow='05 · Glifos' title='Un símbolo por cada parte del stack'>
					<div className='grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9'>
						{GLYPHS.map(({ name, Glyph }) => (
							<div key={name} className='flex flex-col items-center gap-2 rounded-xl border border-border bg-surface-elevated p-4 text-ink transition hover:text-ember hover:border-ember/50'>
								<Glyph width={28} height={28} />
								<span className='font-mono text-[11px] text-ink-faint'>{name}</span>
							</div>
						))}
					</div>
					<p className='mt-4 text-sm text-ink-muted max-w-2xl'>
						Dibujos geométricos propios, no logotipos de marcas. Heredan <code className='font-mono text-ember'>currentColor</code>,
						trazo de 2 px sobre una cuadrícula de 24.
					</p>
				</Section>

				<Section id='ilustraciones' eyebrow='06 · Ilustraciones' title='Escenas del taller, animadas'>
					<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
						{(Object.keys(ILLUSTRATIONS) as (keyof typeof ILLUSTRATIONS)[]).map((name) => (
							<figure key={name} className='overflow-hidden rounded-2xl border border-border bg-surface-elevated dot-grid'>
								<Illustration name={name} className='w-full h-auto' />
								<figcaption className='flex items-center justify-between gap-2 border-t border-border bg-surface-elevated px-4 py-3'>
									<span className='text-sm text-ink'>{ILLUSTRATIONS[name]}</span>
									<a
										href={`/illustrations/${name}.svg`}
										download
										className='inline-flex items-center gap-1 font-mono text-xs text-ember hover:underline'
									>
										<FiDownload /> SVG
									</a>
								</figcaption>
							</figure>
						))}
					</div>
				</Section>

				<Section id='licencia' eyebrow='07 · Licencia' title='Todo esto es tuyo'>
					<div className='grid gap-4 md:grid-cols-3 text-sm text-ink-muted'>
						<p><strong className='text-ink'>Ilustraciones y glifos:</strong> originales de este repositorio, dedicados al dominio público (CC0). Úsalos, modifícalos y véndelos sin atribución.</p>
						<p><strong className='text-ink'>Tipografías:</strong> Bricolage Grotesque, Instrument Sans y JetBrains Mono, todas bajo SIL Open Font License; libres para uso comercial.</p>
						<p><strong className='text-ink'>Código:</strong> componentes React sobre Framer Motion (MIT) y Tailwind CSS (MIT).</p>
					</div>
				</Section>
			</div>
		</main>
	);
}
