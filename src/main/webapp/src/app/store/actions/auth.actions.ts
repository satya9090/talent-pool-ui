import { Action } from '@ngrx/store';
export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';

export const AUTH_REGISTRATION_START = 'AUTH_REGISTRATION_START';

export class AuthLoginStart implements Action {
	readonly type = AUTH_LOGIN_START;

	constructor(public payload: { email: string; password: string }) {}
}

export class AuthSuccess implements Action {
	readonly type = AUTH_SUCCESS;

	constructor(public payload: any) {}
}

export class AuthFailed implements Action {
	readonly type = AUTH_FAILED;
	constructor(public payload: string) {}
}

export class AuthRegistrationStart implements Action {
	readonly type = AUTH_REGISTRATION_START;

	constructor(public payload: any) {}
}

export type AuthActions =
	| AuthLoginStart
	| AuthSuccess
	| AuthFailed
	| AuthRegistrationStart;
