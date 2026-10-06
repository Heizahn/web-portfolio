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
						'linear-gradient(135deg, #0e1220 0%, #151b2c 60%, #341006 100%)',
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
							'radial-gradient(circle, rgba(255,138,76,0.55), transparent 70%)',
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
							'radial-gradient(circle, rgba(63,208,181,0.35), transparent 70%)',
					}}
				/>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '12px',
						fontSize: '22px',
						color: '#ffd27a',
						fontFamily: 'monospace',
					}}
				>
					<div
						style={{
							width: '10px',
							height: '10px',
							borderRadius: '50%',
							background: '#3fd0b5',
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
							color: '#ff8a4c',
							lineHeight: 1.2,
							display: 'flex',
						}}
					>
						Full Stack Developer
					</div>
					<div
						style={{
							fontSize: '28px',
							color: '#b6bfce',
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
						color: '#eef1f6',
					}}
				>
					{['React', 'Next.js', 'TypeScript', 'Node / Bun', 'Rust'].map((t) => (
						<div
							key={t}
							style={{
								padding: '10px 20px',
								borderRadius: '999px',
								border: '1px solid rgba(255,138,76,0.45)',
								background: 'rgba(255,138,76,0.12)',
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
