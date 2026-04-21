'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiSend, FiArrowUpRight } from 'react-icons/fi';
import useLang from '../hooks/useLang';
import { Github, LinkedIn, MAILTO } from '@/env/env';
import data from './data.json';

type FormState = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function extractEmail(mailto: string) {
	return mailto.startsWith('mailto:') ? mailto.slice(7) : mailto;
}

export default function ContactSection() {
	const { lang } = useLang();
	const t = data[lang];

	const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
	const [errors, setErrors] = useState<Errors>({});
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

	const validate = (values: FormState): Errors => {
		const next: Errors = {};
		if (!values.name.trim()) next.name = t.form.errors.name;
		if (!EMAIL_RE.test(values.email.trim())) next.email = t.form.errors.email;
		if (values.message.trim().length < 10) next.message = t.form.errors.message;
		return next;
	};

	const handleChange =
		(field: keyof FormState) =>
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const value = e.target.value;
			setForm((prev) => ({ ...prev, [field]: value }));
			if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
		};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const next = validate(form);
		setErrors(next);
		if (Object.keys(next).length > 0) return;

		setStatus('sending');
		const subject = encodeURIComponent(
			lang === 'es'
				? `Contacto desde el portfolio — ${form.name}`
				: `Portfolio contact — ${form.name}`,
		);
		const body = encodeURIComponent(
			`${form.message}\n\n— ${form.name}\n${form.email}`,
		);
		const to = extractEmail(MAILTO);
		window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

		setTimeout(() => setStatus('sent'), 400);
	};

	const channels = [
		{
			key: 'email' as const,
			href: MAILTO,
			icon: <HiOutlineMail className='w-5 h-5' />,
			value: extractEmail(MAILTO),
		},
		{
			key: 'linkedin' as const,
			href: LinkedIn,
			icon: <FaLinkedin className='w-5 h-5' />,
			value: LinkedIn.replace(/^https?:\/\//, ''),
		},
		{
			key: 'github' as const,
			href: Github,
			icon: <FaGithub className='w-5 h-5' />,
			value: Github.replace(/^https?:\/\//, ''),
		},
	];

	return (
		<section className='w-full pt-20 mx-auto container lg:max-w-4xl md:max-w-2xl'>
			<motion.header
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '-80px' }}
				transition={{ duration: 0.5 }}
				className='mb-10'
			>
				<div className='inline-flex items-center gap-2 px-3 py-1 rounded-full glass-sm text-xs font-medium text-ink-muted mb-4'>
					<span className='relative flex h-2 w-2'>
						<span className='absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping' />
						<span className='relative inline-flex h-2 w-2 rounded-full bg-emerald-500' />
					</span>
					{t.availability}
				</div>
				<h2 className='font-display text-3xl md:text-4xl font-semibold text-ink'>
					{t.title}
				</h2>
				<p className='mt-3 text-ink-muted text-sm md:text-base max-w-2xl'>
					{t.subtitle}
				</p>
			</motion.header>

			<div className='grid gap-6 md:grid-cols-5'>
				{/* Channels */}
				<div className='md:col-span-2 flex flex-col gap-3'>
					{channels.map((c, i) => (
						<motion.a
							key={c.key}
							href={c.href}
							target={c.key === 'email' ? undefined : '_blank'}
							rel={c.key === 'email' ? undefined : 'noopener noreferrer'}
							initial={{ opacity: 0, x: -12 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}
							className='group glass rounded-xl p-4 flex items-center gap-4 hover:shadow-glow hover:-translate-y-0.5 transition-all'
						>
							<div className='flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500/20 to-accent-500/20 border border-brand-500/30 flex items-center justify-center text-accent-600 dark:text-accent-400'>
								{c.icon}
							</div>
							<div className='min-w-0 flex-1'>
								<div className='flex items-center gap-1.5 text-sm font-semibold text-ink'>
									{t.channels[c.key].label}
									<FiArrowUpRight className='w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition' />
								</div>
								<div className='text-xs text-ink-muted truncate'>
									{c.value}
								</div>
								<div className='text-[11px] text-ink-faint mt-0.5'>
									{t.channels[c.key].description}
								</div>
							</div>
						</motion.a>
					))}
				</div>

				{/* Form */}
				<motion.form
					onSubmit={handleSubmit}
					noValidate
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-60px' }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='md:col-span-3 glass rounded-2xl p-5 md:p-6 flex flex-col gap-4'
				>
					<h3 className='font-display text-lg md:text-xl font-semibold text-ink'>
						{t.form.title}
					</h3>

					<Field
						id='contact-name'
						label={t.form.name}
						placeholder={t.form.namePlaceholder}
						value={form.name}
						onChange={handleChange('name')}
						error={errors.name}
						autoComplete='name'
					/>

					<Field
						id='contact-email'
						label={t.form.email}
						type='email'
						placeholder={t.form.emailPlaceholder}
						value={form.email}
						onChange={handleChange('email')}
						error={errors.email}
						autoComplete='email'
					/>

					<div className='flex flex-col gap-1.5'>
						<label
							htmlFor='contact-message'
							className='text-xs font-medium text-ink-muted'
						>
							{t.form.message}
						</label>
						<textarea
							id='contact-message'
							value={form.message}
							onChange={handleChange('message')}
							placeholder={t.form.messagePlaceholder}
							rows={5}
							className={`w-full rounded-xl px-4 py-3 text-sm bg-surface-muted border ${
								errors.message
									? 'border-red-500/60 focus:border-red-500'
									: 'border-border focus:border-accent-500'
							} text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition resize-none`}
						/>
						{errors.message && (
							<p className='text-xs text-red-500'>{errors.message}</p>
						)}
					</div>

					<div className='flex items-center justify-between gap-4 mt-1'>
						{status === 'sent' ? (
							<p className='text-xs text-emerald-600 dark:text-emerald-400'>
								{t.form.success}
							</p>
						) : (
							<span />
						)}
						<button
							type='submit'
							disabled={status === 'sending'}
							className='btn-primary text-sm inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed'
						>
							<FiSend className='w-4 h-4' />
							{status === 'sending' ? t.form.sending : t.form.submit}
						</button>
					</div>
				</motion.form>
			</div>
		</section>
	);
}

interface FieldProps {
	id: string;
	label: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	type?: string;
	autoComplete?: string;
}

function Field({ id, label, placeholder, value, onChange, error, type = 'text', autoComplete }: FieldProps) {
	return (
		<div className='flex flex-col gap-1.5'>
			<label htmlFor={id} className='text-xs font-medium text-ink-muted'>
				{label}
			</label>
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				autoComplete={autoComplete}
				className={`w-full rounded-xl px-4 py-2.5 text-sm bg-surface-muted border ${
					error
						? 'border-red-500/60 focus:border-red-500'
						: 'border-border focus:border-accent-500'
				} text-ink placeholder:text-ink-faint focus:outline-none focus:ring-2 focus:ring-accent-500/30 transition`}
			/>
			{error && <p className='text-xs text-red-500'>{error}</p>}
		</div>
	);
}
