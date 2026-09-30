import type { ImageMetadata } from 'astro';
import mitchellReynoldsAvatar from '../assets/images/testimonials/mitchell-reynolds.png';

export type Testimonial = {
	name: string;
	company: string;
	quote: string;
	avatar?: ImageMetadata;
};

export const testimonials: Testimonial[] = [
	{
		name: 'Mitchell Reynolds',
		company: 'Unwynd',
		quote:
			'Hassan is responsive all the time & is ready to put in extra work when needed. I appreciate the work he did on Unwynd, the app we developed together. My pitch deck which he created was very clean, & he managed my social media accounts well. He is a great teammate. Thank you Hassan.',
		avatar: mitchellReynoldsAvatar,
	},
	{
		name: 'Zunaira Javed',
		company: 'Parento',
		quote:
			'Hassan is an experienced, energetic, dedicated and keeps up to date with the latest technologies. What makes Hassan stand out is his attention to detail, understanding the business acumen of projects and coming up with solutions based on that. His experience and quick grasp of the domain knowledge enables him to deliver results effectively. Working with Hassan has been fun.',
	},
	{
		name: 'Syed Ahmed',
		company: 'SolarInformatics',
		quote:
			'I enjoyed working with Hassan Mujtaba at Solarinformatics, where he made a big impact as a Sr Product Designer. He has a great talent for turning complex ideas into simple, user-friendly designs that improve the overall experience. I highly recommend Hassan to any team looking for a creative, skilled, and user-focused designer who brings ideas to life with great designs and smooth user experiences.',
	},
	{
		name: 'Anns Mustafa',
		company: 'SolarInformatics',
		quote:
			'Hassan consistently impressed me with his UI/UX expertise. He has a keen eye for detail and translates complex requirements into intuitive, visually appealing interfaces that made a real impact on our projects. A great team player, always open to feedback, and delivers high-quality designs on deadline. Highly recommend him for any UI/UX role.',
	},
	{
		name: 'Mukesh Kumar',
		company: 'GRID Systems (Pvt) Ltd.',
		quote:
			'Hassan stands out as an exceptional Product Designer, with a talent for transforming complex ideas into clean, user-friendly interfaces that enhance the overall experience. He was proactive in gathering feedback and iterating on designs. An invaluable collaborator, he worked seamlessly with developers and product managers, ensuring concepts were clearly communicated and effectively implemented.',
	},
	{
		name: 'Usman Ghani',
		company: 'BitSol Technologies',
		quote:
			"Hassan consistently produced high-quality designs that effectively met our clients' needs. He was skilled at translating complex requirements into elegant, intuitive designs and always willing to collaborate with stakeholders. His ability to think creatively and outside the box let him produce innovative, compelling solutions that exceeded expectations.",
	},
];
