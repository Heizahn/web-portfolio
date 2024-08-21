export interface Project {
	id: number;
	title: string;
	description: string;
	techs: string[];
	code: string;
	image: string;
	view: string;
}

// Define the data structure
export interface Data {
	es: Project[];
	en: Project[];
}

export interface CardStudyProps {
	title: string;
	mode: string;
	date: string;
	description: string[];
	githubLink?: string;
	githubText?: string;
}
