export interface Address {
	country: string;
	state: string;
	zipcode: string;
	address: string;
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

export interface User {
	personalDetails: PersonalDetails;
	educationalDetails: EducationalDetails;
	permanentAddress?: Address;
	presentAddress?: Address;
	aboutMe: string;
}
