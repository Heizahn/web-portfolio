import type { SVGProps } from 'react';

export function FlagVE(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox='0 0 18 12'
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-label='Venezuela'
			{...props}
		>
			<rect width='18' height='4' y='0' fill='#FFCD00' />
			<rect width='18' height='4' y='4' fill='#00247D' />
			<rect width='18' height='4' y='8' fill='#CF142B' />
		</svg>
	);
}

export function FlagGB(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox='0 0 60 30'
			xmlns='http://www.w3.org/2000/svg'
			role='img'
			aria-label='United Kingdom'
			{...props}
		>
			<clipPath id='t'>
				<path d='M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z' />
			</clipPath>
			<path d='M0,0 v30 h60 v-30 z' fill='#012169' />
			<path d='M0,0 L60,30 M60,0 L0,30' stroke='#fff' strokeWidth='6' />
			<path
				d='M0,0 L60,30 M60,0 L0,30'
				clipPath='url(#t)'
				stroke='#C8102E'
				strokeWidth='4'
			/>
			<path d='M30,0 v30 M0,15 h60' stroke='#fff' strokeWidth='10' />
			<path d='M30,0 v30 M0,15 h60' stroke='#C8102E' strokeWidth='6' />
		</svg>
	);
}
