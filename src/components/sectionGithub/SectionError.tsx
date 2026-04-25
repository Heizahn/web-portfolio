'use client';

import { FiAlertCircle } from 'react-icons/fi';
import useLang from '../hooks/useLang';
import data from './data.json';

export default function SectionError() {
	const { lang } = useLang();
	return (
		<div className='flex items-center gap-3 py-6 text-muted hairline-b'>
			<FiAlertCircle className='text-xl shrink-0' />
			<p className='text-sm'>{data[lang].error}</p>
		</div>
	);
}
