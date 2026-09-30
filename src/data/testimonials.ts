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
			'I had the pleasure of working with Hassan Mujtaba, he consistently impressed me with his UI/UX design expertise. Hassan has a keen eye for detail, creativity, and a deep understanding of user-centric design principles. His ability to translate complex requirements into intuitive, visually appealing interfaces made a significant impact on our projects. He is a great team player, always open to feedback and collaboration. His dedication to delivering high-quality designs within deadlines is commendable. I highly recommend Hassan for any UI/UX role—his skills and professionalism would be a valuable asset to any team.',
	},
	{
		name: 'Mukesh Kumar',
		company: 'GRID Systems (Pvt) Ltd.',
		quote:
			'I had the pleasure of working closely with Hassan Mujtaba at GRID Systems (Pvt) Ltd, and he truly stands out as an exceptional Product Designer. He has a unique talent for transforming complex ideas into clean, simple, and user-friendly interfaces that not only look great but also enhance the overall user experience. Hassan was always proactive in gathering user feedback and iterating on designs to ensure the best possible outcome. In addition to his strong design skills, Hassan was an invaluable collaborator. He worked seamlessly with developers, product managers, and other team members, ensuring that design concepts were clearly communicated and effectively implemented.',
	},
	{
		name: 'Usman Ghani',
		company: 'BitSol Technologies',
		quote:
			"Hassan consistently produced high-quality designs that effectively met the needs of our clients. He was skilled at translating complex requirements into elegant and intuitive designs and was always willing to work collaboratively with stakeholders to ensure that their needs were met. Hassan's ability to think creatively and outside the box allowed him to produce innovative and compelling design solutions that exceeded expectations.",
	},
];
