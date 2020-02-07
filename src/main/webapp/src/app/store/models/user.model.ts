export interface Address {
	addressId?: number;
	type: 'permanent' | 'present';
	country: string;
	state: string;
	city: string;
	pincode: number;
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
	projectId?: number;
	projectName: string;
	startDate: Date;
	endDate: Date;
	technologyUsed: string;
	projectDetails: string;
	role: string;
	roleDescription: string;
	companyName: string;
}

export interface EducationalDetails {
	educationId?: number;
	qualification: string;
	instituteName: string;
	passingYear: number;
	specification: string;
	percentage: number;
	courseType: string;
}

export interface Skill {
	major: string;
	minor: string;
	lastUsedOn: number;
	experienceInYears: number;
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
	role: 'candidate' | 'admin' | 'employeer';
	isVerify: 'Y' | 'N';
	isActive: 'Y' | 'N';
	isProfileComplete: 'Y' | 'N';
	projectDetails: ProjectDetails[];
	educationDetails: EducationalDetails[];
	address: Address[];
}
