'use client';
import ContactLinkedIn from '@/components/Contact/contact_linkedIn';
import Card from './card';
import ScrollIndicator from './ScrollIndicator';
import data from './data.json';
import useLang from '../hooks/useLang';
import { motion } from 'framer-motion';
import { Illustration } from '../ds';

export default function SectionOne() {
	const { lang } = useLang();
	return (
		<section className='relative py-16 md:py-32 lg:py-40 min-h-screen md:min-h-[90vh] flex items-center scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<div className='max-w-xl w-full'>
				<motion.div
					initial={{ opacity: 0, y: -8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='flex gap-4 mb-6'
				>
					<ContactLinkedIn />
				</motion.div>
				<Card />
			</div>
			<motion.div
				aria-hidden='true'
				initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
				animate={{ opacity: 1, scale: 1, rotate: 0 }}
				transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
				className='pointer-events-none hidden lg:block absolute -right-28 top-1/2 -translate-y-1/2 w-[26rem]'
			>
				<Illustration name='stack-orbit' priority className='w-full h-auto' />
			</motion.div>
			<ScrollIndicator label={data[lang].scrollHint} />
		</section>
	);
}
