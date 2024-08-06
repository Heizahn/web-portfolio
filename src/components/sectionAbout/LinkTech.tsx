interface propsLinkTech {
	href: string;
	title: string;
}

export default function LinkTech({ href, title }: propsLinkTech) {
	return (
		<a target='_blank' href={href}>
			{title}
		</a>
	);
}
