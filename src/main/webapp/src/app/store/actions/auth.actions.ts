import { Action } from '@ngrx/store';
import { AuthUser } from '../models/auth.model';
export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILED = 'AUTH_FAILED';
export const AUTH_AUTO_LOGIN = 'AUTH_AUTO_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const AUTH_REGISTRATION_START = 'AUTH_REGISTRATION_START';

export class AuthLoginStart implements Action {
	readonly type = AUTH_LOGIN_START;

	constructor(public payload: { email: string; password: string }) {}
}

export class AuthSuccess implements Action {
	readonly type = AUTH_SUCCESS;

	constructor(public payload: AuthUser) {}
}

export class AuthFailed implements Action {
	readonly type = AUTH_FAILED;
	constructor(public payload: string) {}
}

export class AuthRegistrationStart implements Action {
	readonly type = AUTH_REGISTRATION_START;
	constructor(public payload: any) {}
}

export class AuthAutoLogin implements Action {
	readonly type = AUTH_AUTO_LOGIN;
}

export class AuthLogout implements Action {
	readonly type = AUTH_LOGOUT;
}

export type AuthActions =
	| AuthLoginStart
	| AuthSuccess
	| AuthFailed
	| AuthRegistrationStart
	| AuthAutoLogin
	| AuthLogout;
