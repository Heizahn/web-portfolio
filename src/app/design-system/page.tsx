import type { Metadata } from 'next';
import Showcase from './Showcase';

export const metadata: Metadata = {
	title: 'Forja · Design System',
	description:
		'Forja, el sistema de diseño de Heizahn: tokens, tipografía, movimiento, componentes animados e ilustraciones libres.',
	alternates: { canonical: '/design-system' },
};

export default function DesignSystemPage() {
	return <Showcase />;
}
