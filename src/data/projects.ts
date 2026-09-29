import type { ImageMetadata } from 'astro';
import gridImage from '../assets/images/case-studies/grid-cover.png';
import solarampsImage from '../assets/images/case-studies/solaramps-cover.png';
import medicraImage from '../assets/images/case-studies/medicra365-cover.png';
import genomexImage from '../assets/images/case-studies/genomex-cover.png';
import offerlandedImage from '../assets/images/offerlanded-cover.png';
import soapsudsImage from '../assets/images/other-projects/soapsuds.png';
import pretelioImage from '../assets/images/case-studies/pretelio-cover.png';
import jotaiImage from '../assets/images/other-projects/jotai.png';
import unwyndImage from '../assets/images/other-projects/unwynd.png';
import boxtrImage from '../assets/images/other-projects/boxtr.png';

export type Project = {
	name: string;
	title: string;
	description: string;
	background: 'lime' | 'cyan' | 'lavender' | 'mint' | 'violet' | 'sky' | 'seafoam';
	variant: 'desktop' | 'split' | 'mobile' | 'board';
	href: string;
	image: ImageMetadata;
	alt: string;
	imageClass: string;
};

export const workPageSize = 10;

export const projects: Project[] = [
	{
		name: 'GRID',
		title: 'Global intelligence delivery & control platform for enterprise operations',
		description:
			'Real-time visibility, situational awareness, and operational control across global environments for enterprise and individual consumers.',
		background: 'lime',
		variant: 'desktop',
		href: '/work/grid',
		image: gridImage,
		alt: 'GRID control center dashboard preview',
		imageClass: 'project-preview-image',
	},
	{
		name: 'SolarAMPs',
		title: 'Enterprise solar ERP platform for large-scale operations',
		description:
			'Multi-module resource planning platform for the solar industry, covering sales, project management, billing, and field operations.',
		background: 'cyan',
		variant: 'desktop',
		href: '/work/solaramps',
		image: solarampsImage,
		alt: 'SolarAMPs ERP dashboard preview',
		imageClass: 'project-preview-image',
	},
	{
		name: 'GenomeX',
		title: 'AI-powered workout planner for athletes',
		description:
			'A genetics-driven training platform translating SNP data and real-time biometrics into adaptive, AI-generated workout plans.',
		background: 'violet',
		variant: 'mobile',
		href: '/work/genomex',
		image: genomexImage,
		alt: 'GenomeX AI workout planner app preview',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Medicra365',
		title: 'Doctor-facing healthcare & patient management platform',
		description:
			'A smart practice management platform helping doctors manage appointments, patient records, and consultations across web and mobile.',
		background: 'lavender',
		variant: 'desktop',
		href: '/work/medicra365',
		image: medicraImage,
		alt: 'Medicra365 healthcare platform preview',
		imageClass: 'project-preview-image',
	},
	{
		name: 'OfferLanded',
		title: 'AI-powered job search & career management platform',
		description:
			'An intelligent career toolkit combining AI resume optimization, job tracking, interview preparation, and skill-match analysis.',
		background: 'mint',
		variant: 'desktop',
		href: '/work/offerlanded',
		image: offerlandedImage,
		alt: 'OfferLanded job search platform preview',
		imageClass: 'project-preview-image',
	},
	{
		name: 'SOAPsuds',
		title: 'AI-powered clinical notes & scribing platform',
		description:
			'AI-generated SOAP notes, visit recording, and a human-in-the-loop Magic Edit layer that streamlines documentation for clinicians.',
		background: 'sky',
		variant: 'desktop',
		href: '/work/soapsuds',
		image: soapsudsImage,
		alt: 'SOAPsuds clinical notes platform preview',
		imageClass: 'project-preview-image',
	},
	{
		name: 'Pretelio',
		title: 'Retail intelligence & loyalty platform',
		description:
			'A scalable system for dynamic pricing, localized offers, and customer engagement across multi-store retail ecosystems.',
		background: 'seafoam',
		variant: 'desktop',
		href: '/work/pretelio',
		image: pretelioImage,
		alt: 'Pretelio retail intelligence platform preview',
		imageClass: 'project-preview-image',
	},
];

export type OtherProject = {
	name: string;
	description: string;
	image: ImageMetadata;
	alt: string;
	href: string;
	link?: string;
};

export const otherProjects: OtherProject[] = [
	{
		name: 'Jot.ai',
		description:
			'AI-powered meeting intelligence platform — real-time transcription, conversation structuring, and action-item extraction from unstructured meetings.',
		image: jotaiImage,
		alt: 'Jot.ai meeting intelligence platform preview',
		href: '/work/jotai',
	},
	{
		name: 'Unwynd',
		description:
			'Mobile social and event automation platform — scheduling, RSVP, group coordination, and community newsfeed built mobile-first.',
		image: unwyndImage,
		alt: 'Unwynd mobile social platform preview',
		href: '/work/unwynd',
	},
	{
		name: 'Boxtr',
		description:
			'Enterprise intranet and collaboration platform — organizational newsfeed, task and training modules, and AI chatbot integration across distributed teams.',
		image: boxtrImage,
		alt: 'Boxtr intranet collaboration platform preview',
		href: '/work/boxtr',
	},
];
