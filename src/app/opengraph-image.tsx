import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Humberto Bracho — Full Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '80px',
					background:
						'linear-gradient(135deg, #0b0a18 0%, #1e1b4b 50%, #4c1d95 100%)',
					color: 'white',
					fontFamily: 'sans-serif',
					position: 'relative',
				}}
			>
				<div
					style={{
						position: 'absolute',
						top: '-120px',
						right: '-120px',
						width: '420px',
						height: '420px',
						borderRadius: '50%',
						background:
							'radial-gradient(circle, rgba(168,85,247,0.55), transparent 70%)',
					}}
				/>
				<div
					style={{
						position: 'absolute',
						bottom: '-120px',
						left: '-120px',
						width: '380px',
						height: '380px',
						borderRadius: '50%',
						background:
							'radial-gradient(circle, rgba(99,102,241,0.55), transparent 70%)',
					}}
				/>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
						fontSize: '22px',
						color: '#a5b4fc',
						fontFamily: 'monospace',
					}}
				>
					<div
						style={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							background: '#10b981',
						}}
					/>
					heizahn.dev
				</div>

				<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<div
						style={{
							fontSize: '84px',
							fontWeight: 800,
							lineHeight: 1.05,
							letterSpacing: '-0.02em',
							display: 'flex',
						}}
					>
						Humberto Bracho
					</div>
					<div
						style={{
							fontSize: '40px',
							fontWeight: 500,
							color: '#c4b5fd',
							lineHeight: 1.2,
							display: 'flex',
						}}
					>
						Full Stack Developer
					</div>
					<div
						style={{
							fontSize: '28px',
							color: '#94a3b8',
							maxWidth: '900px',
							lineHeight: 1.4,
							display: 'flex',
						}}
					>
						Interfaces modernas con React/Next.js · Backends en Node, Bun y Rust
					</div>
				</div>

				<div
					style={{
						display: 'flex',
						gap: '14px',
						fontSize: '22px',
						color: '#e2e8f0',
					}}
				>
					{['React', 'Next.js', 'TypeScript', 'Node / Bun', 'Rust'].map((t) => (
						<div
							key={t}
							style={{
								padding: '10px 20px',
								borderRadius: '999px',
								border: '1px solid rgba(168,85,247,0.4)',
								background: 'rgba(99,102,241,0.18)',
								display: 'flex',
							}}
						>
							{t}
						</div>
					))}
				</div>
			</div>
		),
		{ ...size },
	);
}
