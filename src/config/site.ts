export type SiteLink = {
	href: string;
	label: string;
};

export type SiteConfig = {
	name: string;
	title: string;
	description: string;
	siteUrl: string;
	email: string;
	locale: string;
	authorName: string;
	authorRole: string;
	keywords: string[];
	ogImage: string;
	navLinks: SiteLink[];
	extraPages: SiteLink[];
	legalLinks: SiteLink[];
	socialLinks: SiteLink[];
};

const defaultSiteUrl = 'https://hxnmujtaba.com';
const envSiteUrl = process.env.SITE_URL ?? process.env.PUBLIC_SITE_URL;
const normalizedSiteUrl = (envSiteUrl || defaultSiteUrl).replace(/\/+$/, '');

export const siteConfig: SiteConfig = {
	name: 'Hassan Mujtaba',
	title: 'Hassan Mujtaba | Product Designer & UX Architect',
	description:
		'Product Designer & UX Architect with 12+ years of experience designing AI-enabled, data-driven SaaS platforms and complex enterprise systems.',
	// Set SITE_URL or PUBLIC_SITE_URL to keep canonicals, robots.txt, and the sitemap aligned in each environment.
	siteUrl: normalizedSiteUrl,
	email: 'hassan.mujtaba715@gmail.com',
	locale: 'en-US',
	authorName: 'Muhammad Hassan Mujtaba',
	authorRole: 'Senior Product Designer',
	keywords: [
		'Product Designer portfolio',
		'UX Architect',
		'Enterprise SaaS design',
		'AI-enabled product design',
		'case study portfolio',
	],
	ogImage: '/og-image.svg',
	navLinks: [
		{ href: '/work', label: 'Work' },
		{ href: '/about', label: 'About' },
		{ href: '/resume', label: 'Resume' },
	],
	extraPages: [
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	legalLinks: [
		{ href: '/cookies', label: 'Cookies' },
		{ href: '/privacy', label: 'Privacy' },
		{ href: '/terms', label: 'Terms' },
	],
	socialLinks: [
		{ href: 'https://www.linkedin.com/in/hassanmujtaba/', label: 'LinkedIn' },
		{ href: 'https://www.behance.net/hxnmujtaba', label: 'Behance' },
	],
};
