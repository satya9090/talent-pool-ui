import {
	UserActions,
	USER_GET_DETAILS_START,
	USER_GET_DETAILS_FAILED,
	USER_GET_DETAILS_SUCCESS
} from '../actions/user.actions';

export interface UserState {
	loading: boolean;
	errorMessage: string;
	currentUser: any;
}
const initialState: UserState = {
	loading: false,
	errorMessage: null,
	currentUser: null
};
export function UserReducer(state = initialState, action: UserActions) {
	switch (action.type) {
		case USER_GET_DETAILS_START:
			return { ...state, loading: true, errorMessage: null, currentUser: null };
		case USER_GET_DETAILS_SUCCESS:
			return { ...state, loading: false, currentUser: action.payload };
		case USER_GET_DETAILS_FAILED:
			return { ...state, loading: false, errorMessage: action.payload };
		default:
			return state;
	}
}
