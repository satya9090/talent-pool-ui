import { Action } from '@ngrx/store';
import { User, Address } from '../models/user.model';

export const USER_GET_DETAILS_START = 'USER_GET_DETAILS_START';
export const USER_GET_DETAILS_SUCCESS = 'USER_GET_DETAILS_SUCCESS';
export const USER_GET_DETAILS_FAILED = 'USER_GET_DETAILS_FAILED';

export const USER_SAVE_PERSONAL_INFO_START = 'USER_SAVE_PERSONAL_INFO_START';
export const USER_SAVE_PERSONAL_INFO_SUCCESS = 'USER_SAVE_PERSONAL_INFO_SUCCESS';
export const USER_SAVE_PERSONAL_INFO_FAILED = 'USER_SAVE_PERSONAL_INFO_FAILED';

export const USER_SAVE_ADDRESS_INFO_START = 'USER_SAVE_ADDRESS_INFO_START';
export const USER_SAVE_ADDRESS_INFO_SUCCESS = 'USER_SAVE_ADDRESS_INFO_SUCCESS';
export const USER_SAVE_ADDRESS_INFO_FAILED = 'USER_SAVE_ADDRESS_INFO_FAILED';

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

export type UserActions =
	| GetUserDetailsStart
	| GetUserDetailsSuccess
	| GetUserDetailsFailed
	| SaveUserPersonalInfoStart
	| SaveUserPersonalInfoSuccess
	| SaveUserPersonalInfoFailed
	| SaveUserAddressInfoStart
	| SaveUserAddressInfoSuccess
	| SaveUserAddressInfoFailed;
