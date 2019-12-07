export interface Address {
	country: string;
	state: string;
	zipcode: string;
	address: string;
}

export interface Company{
	id: string;
	name: string;
	registredOn?: Date;
	address?: Address
}

export interface ProjectDetails{
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

export interface ProfessionalDetails{
	totalExperience: number;
	technologies: string[];
	companyExperiences: CompanyExperience[];
	projects: ProjectDetails[];
}

export interface User {
	personalDetails: PersonalDetails;
	educationalDetails: EducationalDetails;
	professionalDetails: ProfessionalDetails;
	permanentAddress?: Address;
	presentAddress?: Address;
	aboutMe: string;
	isProfileCompleted: boolean
}
