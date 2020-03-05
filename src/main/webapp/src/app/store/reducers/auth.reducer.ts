import {
	AuthActions,
	AUTH_LOGIN_START,
	AUTH_REGISTRATION_START,
	AUTH_LOGOUT,
	AUTH_FORGOT_PASSWORD_START,
	AUTH_FORGOT_PASSWORD_COMPLETE,
	AUTH_RESET_PASSWORD_START,
	AUTH_RESET_PASSWORD_COMPLETE,
	AUTH_LOGIN_SUCCESS,
	AUTH_FAILED,
	AUTH_REGISTRATION_SUCCESS
} from '../actions/auth.actions';
import { AuthUser } from '../models/auth.model';

export interface AuthState {
	loading: boolean;
	errorMessage: string;
	user: AuthUser;
	registrationDone: boolean;
	loginDone: boolean;
	forgotPwdDone: boolean;
	resetPwdDone: boolean;
}

const initialState: AuthState = {
	loading: false,
	errorMessage: null,
	user: null,
	registrationDone: false,
	loginDone: false,
	forgotPwdDone: false,
	resetPwdDone: false
};

export function AuthReducer(state = initialState, action: AuthActions) {
	switch (action.type) {
		case AUTH_LOGIN_START:
			return { ...state, user: null, loading: true, errorMessage: null, loginDone: false };
		case AUTH_REGISTRATION_START:
			return { ...state, user: null, loading: true, errorMessage: null, registrationDone: false };
		case AUTH_LOGIN_SUCCESS:
			return { ...state, user: action.payload, loading: false };
		case AUTH_REGISTRATION_SUCCESS:
			return { ...state, loading: false, registrationDone: true };
		case AUTH_FAILED:
			return {
				...state,
				user: null,
				loading: false,
				errorMessage: action.payload,
				registrationDone: false,
				loginDone: false,
				forgotPwdDone: false,
				resetPwdDone: false
			};
		case AUTH_LOGOUT:
			return { ...state, user: null };
		case AUTH_FORGOT_PASSWORD_START:
			return { ...state, loading: true, errorMessage: null, forgotPwdDone: false };
		case AUTH_RESET_PASSWORD_START:
			return { ...state, loading: true, errorMessage: null, resetPwdDone: false };
		case AUTH_FORGOT_PASSWORD_COMPLETE:
			return { ...state, loading: false, forgotPwdDone: true };
		case AUTH_RESET_PASSWORD_COMPLETE:
			return { ...state, loading: false, resetPwdDone: true };
		default:
			return { ...state };
	}
}
