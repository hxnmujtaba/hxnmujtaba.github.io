import type { ImageMetadata } from 'astro';
import mitchellReynoldsAvatar from '../assets/images/testimonials/mitchell-reynolds.png';
import zunairaJavedAvatar from '../assets/images/testimonials/zunaira-javed.jpg';
import syedAhmedAvatar from '../assets/images/testimonials/syed-ahmed.jpg';
import annsMustafaAvatar from '../assets/images/testimonials/anns-mustafa.jpg';
import mukeshKumarAvatar from '../assets/images/testimonials/mukesh-kumar.jpg';
import harrisWaheedAvatar from '../assets/images/testimonials/harris-waheed.jpg';
import muhammadMansoorAvatar from '../assets/images/testimonials/muhammad-mansoor.jpg';
import asifKhanAvatar from '../assets/images/testimonials/asif-khan.jpg';

export type Testimonial = {
	name: string;
	company: string;
	quote: string;
	avatar?: ImageMetadata;
};

export const testimonials: Testimonial[] = [
	{
		name: 'Mitchell Reynolds',
		company: 'Founder at Unwynd',
		quote:
			'Hassan is responsive all the time & is ready to put in extra work when needed. I appreciate the work he did on Unwynd, the app we developed together. My pitch deck which he created was very clean, & he managed my social media accounts well. He is a great teammate. Thank you Hassan.',
		avatar: mitchellReynoldsAvatar,
	},
	{
		name: 'Muhammad Mansoor',
		company: 'Product Manager at Toptal',
		quote:
			"I've known Hassan for over 7 years and worked with him directly for 4. He's a rare force multiplier, combining creative and strategic thinking with skilled execution across the full product lifecycle — from requirements and user journeys to prototypes and polished UI. Highly recommend him to any organization needing a designer who can drive ideas from concept to execution.",
		avatar: muhammadMansoorAvatar,
	},
	{
		name: 'Mukesh Kumar',
		company: 'GRID Systems (Pvt) Ltd.',
		quote:
			'Hassan stands out as an exceptional Product Designer, with a talent for transforming complex ideas into clean, user-friendly interfaces that enhance the overall experience. He was proactive in gathering feedback and iterating on designs. An invaluable collaborator, he worked seamlessly with developers and product managers, ensuring concepts were clearly communicated and effectively implemented.',
		avatar: mukeshKumarAvatar,
	},
	{
		name: 'Harris Waheed',
		company: 'Project Manager at Contour',
		quote:
			'Hassan is an exceptional Product Designer with deep expertise across SaaS, B2B, and B2C products. He takes complex problems and translates them into clean, intuitive, user-centered experiences. As a UX Architect, he brings clarity, creativity, and structure to every project, and his calm, collaborative approach consistently elevates the team. Highly recommend him for any product design or UX role.',
		avatar: harrisWaheedAvatar,
	},
	{
		name: 'Syed Ahmed',
		company: 'Cloud Architect at SolarInformatics',
		quote:
			'I enjoyed working with Hassan Mujtaba at Solarinformatics, where he made a big impact as a Sr Product Designer. He has a great talent for turning complex ideas into simple, user-friendly designs that improve the overall experience. I highly recommend Hassan to any team looking for a creative, skilled, and user-focused designer who brings ideas to life with great designs and smooth user experiences.',
		avatar: syedAhmedAvatar,
	},
	{
		name: 'Asif Khan',
		company: 'Solution Architect at Global Rescue',
		quote:
			"Hassan has been a driving force of UI/UX innovation on our project for over 3 years. He grasps business requirements, drills them to the core, and delivers neat, professional designs that often exceed expectations and provide great usability. Highly dedicated, with strong project management skills. I highly recommend him as a true asset to any team.",
		avatar: asifKhanAvatar,
	},
	{
		name: 'Anns Mustafa',
		company: 'Sr. Web Engineer at SolarInformatics',
		quote:
			'Hassan consistently impressed me with his UI/UX expertise. He has a keen eye for detail and translates complex requirements into intuitive, visually appealing interfaces that made a real impact on our projects. A great team player, always open to feedback, and delivers high-quality designs on deadline. Highly recommend him for any UI/UX role.',
		avatar: annsMustafaAvatar,
	},
	{
		name: 'Zunaira Javed',
		company: 'Founder at Parento',
		quote:
			'Hassan is an experienced, energetic, dedicated and keeps up to date with the latest technologies. What makes Hassan stand out is his attention to detail, understanding the business acumen of projects and coming up with solutions based on that. His experience and quick grasp of the domain knowledge enables him to deliver results effectively. Working with Hassan has been fun.',
		avatar: zunairaJavedAvatar,
	},
	{
		name: 'Usman Ghani',
		company: 'Sr. React Engineer at Emumba',
		quote:
			"Hassan consistently produced high-quality designs that effectively met our clients' needs. He was skilled at translating complex requirements into elegant, intuitive designs and always willing to collaborate with stakeholders. His ability to think creatively and outside the box let him produce innovative, compelling solutions that exceeded expectations.",
	},
];
