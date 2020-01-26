import {
	UserActions,
	USER_GET_DETAILS_START,
	USER_ACTION_SUCCESS,
	USER_ACTION_FAILED,
	USER_SAVE_PERSONAL_INFO_START
} from '../actions/user.actions';
import { User } from '../models/user.model';

export interface UserState {
	loading: boolean;
	errorMessage: string;
	currentUser: User;
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
		case USER_SAVE_PERSONAL_INFO_START:
			return { ...state, loading: true, errorMessage: null };
		case USER_ACTION_SUCCESS:
			return { ...state, loading: false, currentUser: action.payload };
		case USER_ACTION_FAILED:
			return { ...state, loading: false, errorMessage: action.payload };
		default:
			return state;
	}
}
