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
	id: number;
	skills: string;
	metadata: string;
}

export interface CandidateSkill {
	skillId?: number;
	candidateUniqueId?: string;
	lastUsedOn: number;
	experienceInYears: number;
	skill: Skill;
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
	skills: CandidateSkill[];
	currentLocation: null;
	totalYearsOfExperience?: number;
	annualSalary?: number;
	role: 'candidate' | 'admin' | 'employer';
	isVerify: 'Y' | 'N';
	isActive: 'Y' | 'N';
	isProfileComplete: 'Y' | 'N';
	projectDetails: ProjectDetails[];
	educationDetails: EducationalDetails[];
	professionalDetails: ProfessionalDetails[];
	address: Address[];
	aboutMe?: string;
	profilePhoto?: any;
	resume?: any;
	resumeDownloadUrl?: string;
	profilePhotoDownloadUrl?: string;
}
