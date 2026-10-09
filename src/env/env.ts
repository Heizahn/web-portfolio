// Public portfolio config — safe to hardcode (not secrets).
// Override via .env.local if you want (NEXT_PUBLIC_*).

export const Github = process.env.NEXT_PUBLIC_GITHUB ?? 'https://github.com/Heizahn';

export const LinkedIn =
	process.env.NEXT_PUBLIC_LINKED_IN ?? 'https://www.linkedin.com/in/heizahn/';

export const MAILTO =
	process.env.NEXT_PUBLIC_MAILTO ?? 'mailto:hrbweibezahn@gmail.com';

export const PM2 = process.env.NEXT_PUBLIC_PM2 ?? '';

export const PM3 = process.env.NEXT_PUBLIC_PM3 ?? '';

// URL pública del sitio (canonical, Open Graph, sitemap, robots).
// Al conectar el dominio propio, cambia solo este valor (ver wrangler.jsonc).
export const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL ?? 'https://heizahn-portfolio.humbertorbw.workers.dev'
).replace(/\/$/, '');

// GitHub handle (usado por la API)
export const GithubUser =
	process.env.NEXT_PUBLIC_GITHUB_USER ?? 'Heizahn';
