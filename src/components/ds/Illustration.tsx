import Image from 'next/image';

export const ILLUSTRATIONS = {
	'forge-terminal': 'Terminal en la forja',
	'pair-cursors': 'Programación en pareja con IA',
	'stack-orbit': 'Órbita del stack',
	'commit-graph': 'Grafo de commits',
	'anvil-404': 'Yunque 404',
} as const;

export type IllustrationName = keyof typeof ILLUSTRATIONS;

/**
 * Ilustraciones animadas de Forja (SVG con CSS interno, CC0).
 * Se sirven desde /public/illustrations y respetan prefers-reduced-motion.
 */
export default function Illustration({
	name,
	className = '',
	priority = false,
}: {
	name: IllustrationName;
	className?: string;
	priority?: boolean;
}) {
	return (
		<Image
			src={`/illustrations/${name}.svg`}
			alt={ILLUSTRATIONS[name]}
			width={400}
			height={300}
			priority={priority}
			unoptimized
			className={className}
		/>
	);
}
