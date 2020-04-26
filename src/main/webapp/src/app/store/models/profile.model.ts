import { CandidateSkill } from './user.model';

export interface ProfileModel {
	candidateId: string;
	firstName: string;
	lastName: string;
	skills: CandidateSkill[];
	experience: number;
	profileDescription: string;
	profileImage: string;
	selected: boolean;
}
