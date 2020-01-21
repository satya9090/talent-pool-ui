import { Action } from '@ngrx/store';

export const USER_GET_DETAILS_START = 'USER_GET_DETAILS_START';
export const USER_GET_DETAILS_SUCCESS = 'USER_GET_DETAILS_SUCCESS';
export const USER_GET_DETAILS_FAILED = 'USER_GET_DETAILS_FAILED';

export class GetUserDetailsStart implements Action {
	readonly type = USER_GET_DETAILS_START;
}

export class GetUserDetailsSuccess implements Action {
	readonly type = USER_GET_DETAILS_SUCCESS;
	constructor(public payload: any) {}
}

export class GetUserDetailsFail implements Action {
	readonly type = USER_GET_DETAILS_FAILED;
	constructor(public payload: string) {}
}

export type UserActions =
	| GetUserDetailsFail
	| GetUserDetailsStart
	| GetUserDetailsSuccess;
