import { Action } from '@ngrx/store';
import { User, Address, EducationalDetails, ProfessionalDetails, ProjectDetails } from '../models/user.model';

export const USER_GET_DETAILS_START = 'USER_GET_DETAILS_START';
export const USER_GET_DETAILS_SUCCESS = 'USER_GET_DETAILS_SUCCESS';
export const USER_GET_DETAILS_FAILED = 'USER_GET_DETAILS_FAILED';

export const USER_SAVE_PERSONAL_INFO_START = 'USER_SAVE_PERSONAL_INFO_START';
export const USER_SAVE_PERSONAL_INFO_SUCCESS = 'USER_SAVE_PERSONAL_INFO_SUCCESS';
export const USER_SAVE_PERSONAL_INFO_FAILED = 'USER_SAVE_PERSONAL_INFO_FAILED';

export const USER_SAVE_ADDRESS_INFO_START = 'USER_SAVE_ADDRESS_INFO_START';
export const USER_SAVE_ADDRESS_INFO_SUCCESS = 'USER_SAVE_ADDRESS_INFO_SUCCESS';
export const USER_SAVE_ADDRESS_INFO_FAILED = 'USER_SAVE_ADDRESS_INFO_FAILED';

export const USER_SAVE_EDUCATION_START = 'USER_SAVE_EDUCATION_START';
export const USER_SAVE_EDUCATION_SUCCESS = 'USER_SAVE_EDUCATION_SUCCESS';
export const USER_SAVE_EDUCATION_FAILED = 'USER_SAVE_EDUCATION_FAILED';
export const USER_DELETE_EDUCATION_START = 'USER_DELETE_EDUCATION_START';
export const USER_SAVE_EDUCATIONAL_INFO = 'USER_SAVE_EDUCATIONAL_INFO';

export const USER_SAVE_EXPERIENCE_START = 'USER_SAVE_EXPERIENCE_START';
export const USER_SAVE_EXPERIENCE_SUCCESS = 'USER_SAVE_EXPERIENCE_SUCCESS';
export const USER_SAVE_EXPERIENCE_FAILED = 'USER_SAVE_EXPERIENCE_FAILED';
export const USER_DELETE_EXPERIENCE_START = 'USER_DELETE_EXPERIENCE_START';
export const USER_SAVE_PROFESSIONAL_INFO = 'USER_SAVE_PROFESSIONAL_INFO';

export const USER_SAVE_PROJECT_START = 'USER_SAVE_PROJECT_START';
export const USER_SAVE_PROJECT_SUCCESS = 'USER_SAVE_PROJECT_SUCCESS';
export const USER_SAVE_PROJECT_FAILED = 'USER_SAVE_PROJECT_FAILED';
export const USER_DELETE_PROJECT_START = 'USER_DELETE_PROJECT_START';
export const USER_SAVE_PROJECT_INFO = 'USER_SAVE_PROJECT_INFO';

export class GetUserDetailsStart implements Action {
	readonly type = USER_GET_DETAILS_START;
}

export class GetUserDetailsSuccess implements Action {
	readonly type = USER_GET_DETAILS_SUCCESS;
	constructor(public payload: User) {}
}

export class GetUserDetailsFailed implements Action {
	readonly type = USER_GET_DETAILS_FAILED;
	constructor(public payload: string) {}
}

export class SaveUserPersonalInfoStart implements Action {
	readonly type = USER_SAVE_PERSONAL_INFO_START;
	constructor(public payload: User) {}
}

export class SaveUserPersonalInfoSuccess implements Action {
	readonly type = USER_SAVE_PERSONAL_INFO_SUCCESS;
	constructor(public payload: User) {}
}

export class SaveUserPersonalInfoFailed implements Action {
	readonly type = USER_SAVE_PERSONAL_INFO_FAILED;
	constructor(public payload: string) {}
}

export class SaveUserAddressInfoStart implements Action {
	readonly type = USER_SAVE_ADDRESS_INFO_START;
	constructor(public payload: { addressList: Address[]; modifiedUser: User }) {}
}

export class SaveUserAddressInfoSuccess implements Action {
	readonly type = USER_SAVE_ADDRESS_INFO_SUCCESS;
	constructor(public payload: User) {}
}

export class SaveUserAddressInfoFailed implements Action {
	readonly type = USER_SAVE_ADDRESS_INFO_FAILED;
	constructor(public payload: string) {}
}

export class SaveUserEducationStart implements Action {
	readonly type = USER_SAVE_EDUCATION_START;
	constructor(public payload: { education: EducationalDetails; modifiedUser: User }) {}
}

export class SaveUserEducationSuccess implements Action {
	readonly type = USER_SAVE_EDUCATION_SUCCESS;
	constructor(public payload: User) {}
}

export class SaveUserEducationFailed implements Action {
	readonly type = USER_SAVE_EDUCATION_FAILED;
	constructor(public payload: string) {}
}

export class DeleteUserEducationStart implements Action {
	readonly type = USER_DELETE_EDUCATION_START;
	constructor(public payload: { education: EducationalDetails; modifiedUser: User }) {}
}

export class SaveUserEducationalInfo implements Action {
	readonly type = USER_SAVE_EDUCATIONAL_INFO;
}

export class SaveUserExperienceStart implements Action {
	readonly type = USER_SAVE_EXPERIENCE_START;
	constructor(public payload: { experience: ProfessionalDetails; modifiedUser: User }) {}
}

export class SaveUserExperienceSuccess implements Action {
	readonly type = USER_SAVE_EXPERIENCE_SUCCESS;
	constructor(public payload: User) {}
}

export class SaveUserExperienceFailed implements Action {
	readonly type = USER_SAVE_EXPERIENCE_FAILED;
	constructor(public payload: string) {}
}

export class DeleteUserExperienceStart implements Action {
	readonly type = USER_DELETE_EXPERIENCE_START;
	constructor(public payload: { experience: ProfessionalDetails; modifiedUser: User }) {}
}

export class SaveUserProfessionalInfo implements Action {
	readonly type = USER_SAVE_PROFESSIONAL_INFO;
}

export class SaveUserProjectStart implements Action {
	readonly type = USER_SAVE_PROJECT_START;
	constructor(public payload: { project: ProjectDetails; modifiedUser: User }) {}
}

export class SaveUserProjectSuccess implements Action {
	readonly type = USER_SAVE_PROJECT_SUCCESS;
	constructor(public payload: User) {}
}

export class SaveUserProjectFailed implements Action {
	readonly type = USER_SAVE_PROJECT_FAILED;
	constructor(public payload: string) {}
}

export class DeleteUserProjectStart implements Action {
	readonly type = USER_DELETE_PROJECT_START;
	constructor(public payload: { project: ProjectDetails; modifiedUser: User }) {}
}

export class SaveUserProjectInfo implements Action {
	readonly type = USER_SAVE_PROJECT_INFO;
}

export type UserActions =
	| GetUserDetailsStart
	| GetUserDetailsSuccess
	| GetUserDetailsFailed
	| SaveUserPersonalInfoStart
	| SaveUserPersonalInfoSuccess
	| SaveUserPersonalInfoFailed
	| SaveUserAddressInfoStart
	| SaveUserAddressInfoSuccess
	| SaveUserAddressInfoFailed
	| SaveUserEducationStart
	| SaveUserEducationSuccess
	| SaveUserEducationFailed
	| DeleteUserEducationStart
	| SaveUserEducationalInfo
	| SaveUserExperienceStart
	| SaveUserExperienceSuccess
	| SaveUserExperienceFailed
	| DeleteUserExperienceStart
	| SaveUserProfessionalInfo
	| SaveUserProjectStart
	| SaveUserProjectSuccess
	| SaveUserProjectFailed
	| DeleteUserProjectStart
	| SaveUserProjectInfo;
