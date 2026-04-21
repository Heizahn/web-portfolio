'use client';

import { FiAlertCircle } from 'react-icons/fi';
import useLang from '../hooks/useLang';
import data from './data.json';

export default function SectionError() {
	const { lang } = useLang();
	return (
		<div className='glass rounded-2xl p-6 flex items-center gap-3 text-ink-muted'>
			<FiAlertCircle className='text-amber-500 text-xl shrink-0' />
			<p className='text-sm'>{data[lang].error}</p>
		</div>
	);
}
