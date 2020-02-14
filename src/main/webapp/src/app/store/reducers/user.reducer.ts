import {
	UserActions,
	USER_GET_DETAILS_START,
	USER_SAVE_PERSONAL_INFO_START,
	USER_SAVE_ADDRESS_INFO_START,
	USER_GET_DETAILS_SUCCESS,
	USER_GET_DETAILS_FAILED,
	USER_SAVE_PERSONAL_INFO_SUCCESS,
	USER_SAVE_ADDRESS_INFO_SUCCESS,
	USER_SAVE_ADDRESS_INFO_FAILED,
	USER_SAVE_PERSONAL_INFO_FAILED,
	USER_SAVE_EDUCATIONAL_INFO_SUCCESS,
	USER_SAVE_EDUCATIONAL_INFO_FAILED,
	USER_SAVE_EDUCATIONAL_INFO_START
} from '../actions/user.actions';
import { User } from '../models/user.model';

export interface UserState {
	loading: boolean;
	errorMessage: string;
	currentUser: User;
	personalDetailsSaved: boolean;
	addressDetailsSaved: boolean;
	educationDetailsSaved: boolean;
	professionalDetailsSaved: boolean;
	projectDetailsSaved: boolean;
}

const initialState: UserState = {
	loading: false,
	errorMessage: null,
	currentUser: null,
	personalDetailsSaved: false,
	addressDetailsSaved: false,
	educationDetailsSaved: false,
	professionalDetailsSaved: false,
	projectDetailsSaved: false
};

export function UserReducer(state = initialState, action: UserActions) {
	switch (action.type) {
		case USER_GET_DETAILS_START:
			return { ...state, loading: true, errorMessage: null, currentUser: null };
		case USER_GET_DETAILS_SUCCESS:
			return {
				...state,
				loading: false,
				currentUser: action.payload,
				personalDetailsSaved: action.payload.isProfileComplete === 'Y',
				addressDetailsSaved: action.payload.isProfileComplete === 'Y',
				educationDetailsSaved: action.payload.isProfileComplete === 'Y',
				professionalDetailsSaved: action.payload.isProfileComplete === 'Y',
				projectDetailsSaved: action.payload.isProfileComplete === 'Y'
			};
		case USER_GET_DETAILS_FAILED:
		case USER_SAVE_PERSONAL_INFO_FAILED:
		case USER_SAVE_ADDRESS_INFO_FAILED:
		case USER_SAVE_EDUCATIONAL_INFO_FAILED:
			return { ...state, loading: false, errorMessage: action.payload };
		case USER_SAVE_PERSONAL_INFO_START:
		case USER_SAVE_ADDRESS_INFO_START:
		case USER_SAVE_EDUCATIONAL_INFO_START:
			return { ...state, loading: true, errorMessage: null };
		case USER_SAVE_PERSONAL_INFO_SUCCESS:
			return { ...state, currentUser: action.payload, loading: false, personalDetailsSaved: true };
		case USER_SAVE_ADDRESS_INFO_SUCCESS:
			return { ...state, currentUser: action.payload, loading: false, addressDetailsSaved: true };
		case USER_SAVE_EDUCATIONAL_INFO_SUCCESS:
			return { ...state, currentUser: action.payload, loading: false, educationDetailsSaved: true };
		default:
			return state;
	}
}
