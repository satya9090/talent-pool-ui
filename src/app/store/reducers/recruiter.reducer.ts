import { ProfileModel } from '../models/profile.model';
import {
	RecruiterActions,
	TOGGLE_PROFILE_SELECTION
} from '../actions/recruiter.actions';
import { Profile } from 'selenium-webdriver/firefox';

export interface RecruiterState {
	profiles: ProfileModel[];
}
const initialState: RecruiterState = {
	profiles: [
		{
			candidateId: 'abcde',
			firstName: 'Debananda',
			lastName: 'Mohanty',
			skills: [
				{
					major: 'UI',
					minor: 'Angular',
					lastUsedOn: 2019,
					experienceInYears: 3
				},
				{ major: 'UI', minor: 'React', lastUsedOn: 2019, experienceInYears: 2 },
				{
					major: 'DevOps',
					minor: 'Docker',
					lastUsedOn: 2019,
					experienceInYears: 1
				}
			],
			experience: 10,
			profileImage: 'http://genchi.info/images/profile-picture-12.jpg',
			profileDescription:
				'Looking for a opertunity to challenge me everytime and bring something new to the table which will be mutually benificial for both me and the company.',
			selected: false
		},
		{
			candidateId: 'abcdef',
			firstName: 'Debananda',
			lastName: 'Mohanty',
			skills: [
				{
					major: 'UI',
					minor: 'Angular',
					lastUsedOn: 2019,
					experienceInYears: 3
				},
				{ major: 'UI', minor: 'React', lastUsedOn: 2019, experienceInYears: 2 },
				{
					major: 'DevOps',
					minor: 'Docker',
					lastUsedOn: 2019,
					experienceInYears: 1
				}
			],
			experience: 10,
			profileImage: 'http://genchi.info/images/profile-picture-12.jpg',
			profileDescription:
				'Looking for a opertunity to challenge me everytime and bring something new to the table which will be mutually benificial for both me and the company.',
			selected: false
		}
	]
};
export function RecruiterReducer(
	state = initialState,
	action: RecruiterActions
) {
	switch (action.type) {
		case TOGGLE_PROFILE_SELECTION:
			return {
				...state,
				profiles: state.profiles.map(prof => {
					if (prof.candidateId === action.payload) {
						return { ...prof, selected: !prof.selected };
					}
					return prof;
				})
			};
		default:
			return state;
	}
}
