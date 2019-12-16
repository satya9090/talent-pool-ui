import { Skill } from './user.model';

export interface ProfileModel {
	candidateId: string;
	firstName: string;
	lastName: string;
	skills: Skill[];
	experience: number;
	profileDescription: string;
	profileImage: string;
	selected: boolean;
}
