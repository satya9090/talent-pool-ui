import {
	AuthActions,
	AUTH_FAILED,
	AUTH_SUCCESS,
	AUTH_LOGIN_START,
	AUTH_REGISTRATION_START
} from '../actions/auth.actions';

export interface AuthState {
	loading: boolean;
	errorMessage: string;
	user: any;
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
			return { ...state, user: null, loading: true, errorMessage: null };
		case AUTH_SUCCESS:
			return { ...state, user: action.payload, loading: false };
		case AUTH_FAILED:
			return {
				...state,
				user: null,
				loading: false,
				errorMessage: action.payload
			};
		default:
			return state;
	}
}
