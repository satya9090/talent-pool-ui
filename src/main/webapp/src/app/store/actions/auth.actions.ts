import { Action } from '@ngrx/store';

import { AuthUser } from '../models/auth.model';
export const AUTH_LOGIN_START = 'AUTH_LOGIN_START';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';

export const AUTH_FAILED = 'AUTH_FAILED';

export const AUTH_AUTO_LOGIN = 'AUTH_AUTO_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const AUTH_REGISTRATION_START = 'AUTH_REGISTRATION_START';
export const AUTH_REGISTRATION_SUCCESS = 'AUTH_REGISTRATION_SUCCESS';

export const AUTH_FORGOT_PASSWORD_START = 'AUTH_FORGOT_PASSWORD_START';
export const AUTH_FORGOT_PASSWORD_COMPLETE = 'AUTH_FORGOT_PASSWORD_COMPLETE';

export const AUTH_RESET_PASSWORD_START = 'AUTH_RESET_PASSWORD_START';
export const AUTH_RESET_PASSWORD_COMPLETE = 'AUTH_RESET_PASSWORD_COMPLETE';

export class AuthLoginStart implements Action {
	readonly type = AUTH_LOGIN_START;

	constructor(public payload: { userName: string; password: string }) {}
}

export class AuthLoginSuccess implements Action {
	readonly type = AUTH_LOGIN_SUCCESS;

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

export class AuthRegistrationSuccess implements Action {
	readonly type = AUTH_REGISTRATION_SUCCESS;
	constructor(public payload: AuthUser) {}
}

export class AuthAutoLogin implements Action {
	readonly type = AUTH_AUTO_LOGIN;
}

export class AuthLogout implements Action {
	readonly type = AUTH_LOGOUT;
}

export class AuthForgotPasswordStart implements Action {
	readonly type = AUTH_FORGOT_PASSWORD_START;
	constructor(public payload: string) {}
}

export class AuthForgotPasswordComplete implements Action {
	readonly type = AUTH_FORGOT_PASSWORD_COMPLETE;
}

export class AuthResetPasswordStart implements Action {
	readonly type = AUTH_RESET_PASSWORD_START;
	constructor(public payload: { resetPasswordToken: string; password: string }) {}
}

export class AuthResetPasswordComplete implements Action {
	readonly type = AUTH_RESET_PASSWORD_COMPLETE;
}

export type AuthActions =
	| AuthLoginStart
	| AuthLoginSuccess
	| AuthFailed
	| AuthRegistrationStart
	| AuthRegistrationSuccess
	| AuthAutoLogin
	| AuthLogout
	| AuthForgotPasswordStart
	| AuthForgotPasswordComplete
	| AuthResetPasswordStart
	| AuthResetPasswordComplete;
