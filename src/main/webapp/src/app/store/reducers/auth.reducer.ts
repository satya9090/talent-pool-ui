import {
	AuthActions,
	AUTH_FAILED,
	AUTH_SUCCESS,
	AUTH_LOGIN_START,
	AUTH_REGISTRATION_START,
	AUTH_LOGOUT,
	AUTH_FORGOT_PASSWORD_START,
	AUTH_FORGOT_PASSWORD_COMPLETE
} from '../actions/auth.actions';
import { AuthUser } from '../models/auth.model';

export interface AuthState {
	loading: boolean;
	errorMessage: string;
	user: AuthUser;
}

const initialState: AuthState = {
	loading: false,
	errorMessage: null,
	user: null
};

export function AuthReducer(state = initialState, action: AuthActions) {
	switch (action.type) {
		case AUTH_LOGIN_START:
		case AUTH_REGISTRATION_START:
			// return { ...state, user: null, loading: true, errorMessage: null };
			return { ...state, loading: true, errorMessage: null };
		case AUTH_SUCCESS:
			return { ...state, user: action.payload, loading: false };
		case AUTH_FAILED:
			return {
				...state,
				user: null,
				loading: false,
				errorMessage: action.payload
			};
		case AUTH_LOGOUT:
			return { ...state, user: null };
		case AUTH_FORGOT_PASSWORD_START:
			return { ...state, loading: true };
		case AUTH_FORGOT_PASSWORD_COMPLETE:
			return { ...state, loading: false };
		default:
			return { ...state };
	}
}
