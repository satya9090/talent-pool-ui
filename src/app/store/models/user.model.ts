export interface Address {
	country: string;
	state: string;
	zipcode: string;
	address: string;
}

export interface Company {
	id: string;
	name: string;
	registredOn?: Date;
	address?: Address;
	profileImage: string;
}

export interface ProjectDetails {
	projectId?: string;
	name: string;
	startDate: Date;
	endDate: Date;
	technologies: string[];
	description: string;
	role: string;
	company: Company;
}

export interface PersonalDetails {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	alternateEmail: string;
	gender: 'Male' | 'Female' | 'Others';
}

export interface EducationalDetails {
	gradDegree: string;
	gradPassingYear: number;
	gradUniversity: string;

	highschoolPercentage: number;
	highSchoolPassingYear: number;
}

export interface CompanyExperience {
	joiningDate: Date;
	LeavingDate?: Date;
	company: Company;
}

export interface ProfessionalDetails {
	totalExperience: number;
	technologies: string[];
	companyExperiences: CompanyExperience[];
	projects: ProjectDetails[];
}

export interface Skill {
	major: string;
	minor: string;
	lastUsedOn: number;
	experienceInYears: number;
}

export interface User {
	userId?: string;
	personalDetails: PersonalDetails;
	educationalDetails: EducationalDetails;
	professionalDetails: ProfessionalDetails;
	permanentAddress?: Address;
	presentAddress?: Address;
	aboutMe: string;
	skills: Skill[];
	isProfileCompleted: boolean;
}
