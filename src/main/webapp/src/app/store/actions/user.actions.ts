import { Action } from '@ngrx/store';
import { User } from '../models/user.model';


export const USER_ACTION_SUCCESS = 'USER_ACTION_SUCCESS';
export const USER_ACTION_FAILED = 'USER_ACTION_FAILED';

export const USER_GET_DETAILS_START = 'USER_GET_DETAILS_START';

export const USER_SAVE_PERSONAL_INFO_START = 'USER_SAVE_PERSONAL_INFO_START';

export class GetUserDetailsStart implements Action {
	readonly type = USER_GET_DETAILS_START;
}

export class UserActionSuccess implements Action {
	readonly type = USER_ACTION_SUCCESS;
	constructor(public payload: User) {}
}

export class UserActionFailed implements Action {
	readonly type = USER_ACTION_FAILED;
	constructor(public payload: string) {}
}

export class SaveUserPersonalInfoStart implements Action{
	readonly type = USER_SAVE_PERSONAL_INFO_START;
	constructor(public payload: User){}
}


export type UserActions =
	| UserActionSuccess
	| UserActionFailed
	| GetUserDetailsStart
	| SaveUserPersonalInfoStart;
