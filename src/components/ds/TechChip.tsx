import type { ComponentType, SVGProps } from 'react';

type Tone = 'ember' | 'verdigris' | 'flame' | 'neutral';

const TONES: Record<Tone, string> = {
	ember: 'text-ember border-ember/35 bg-ember/10',
	verdigris: 'text-verdigris border-verdigris/35 bg-verdigris/10',
	flame: 'text-flame border-flame/35 bg-flame/10',
	neutral: 'text-ink-muted border-border-strong/50 bg-surface-muted',
};

interface TechChipProps {
	label: string;
	Glyph?: ComponentType<SVGProps<SVGSVGElement>>;
	tone?: Tone;
	className?: string;
}

/** Etiqueta de tecnología con su glifo. Texto en mono, siempre legible (AA). */
export default function TechChip({ label, Glyph, tone = 'neutral', className = '' }: TechChipProps) {
	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs font-medium tracking-wide transition-colors ${TONES[tone]} ${className}`}
		>
			{Glyph && <Glyph width={14} height={14} />}
			{label}
		</span>
	);
}
