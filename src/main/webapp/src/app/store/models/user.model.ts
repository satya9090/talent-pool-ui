export interface Address {
	addressId?: number;
	type: 'permanent' | 'present';
	country: string;
	state: string;
	city: string;
	pincode: number;
	address: string;
	candidateUniqueId?: string;
}

export interface Company {
	id: string;
	name: string;
	registeredOn?: Date;
	address?: Address;
	profileImage: string;
}

export interface ProjectDetails {
	projectId?: number;
	candidateUniqueId?: string;
	projectName: string;
	startDate: Date;
	endDate: Date;
	technologyUsed: string[];
	projectDetails: string;
	role: string;
	roleDescription: string;
	companyName: string;
}

export interface EducationalDetails {
	educationId?: number;
	candidateUniqueId?: string;
	qualification: string;
	institution: string;
	startDate: Date;
	endDate: Date;
	subject: string;
	percentage: number;
}

export interface Skill {
	major: string;
	minor: string;
	lastUsedOn: number;
	experienceInYears: number;
}

export interface ProfessionalDetails {
	professionalDetailsId?: number;
	candidateUniqueId?: string;
	jobTitle: string;
	company: string;
	startDate: Date;
	endDate?: Date;
	description: string;
}

export interface User {
	candidateUniqueId: string;
	firstName: string;
	middleName: string;
	lastName: string;
	contactNumber: number;
	emailId: string;
	alternateEmailId: string;
	gender: 'Male' | 'Female' | 'Other';
	skills: Skill[];
	currentLocation: null;
	experience?: number;
	role: 'candidate' | 'admin' | 'employer';
	isVerify: 'Y' | 'N';
	isActive: 'Y' | 'N';
	isProfileComplete: 'Y' | 'N';
	projectDetails: ProjectDetails[];
	educationDetails: EducationalDetails[];
	professionalDetails: ProfessionalDetails[];
	address: Address[];
}
