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
	USER_SAVE_EDUCATION_SUCCESS,
	USER_SAVE_EDUCATION_FAILED,
	USER_SAVE_EDUCATION_START,
	USER_SAVE_EDUCATIONAL_INFO,
	USER_SAVE_EXPERIENCE_FAILED,
	USER_SAVE_EXPERIENCE_START,
	USER_SAVE_PROFESSIONAL_INFO,
	USER_SAVE_EXPERIENCE_SUCCESS,
	USER_SAVE_PROJECT_FAILED,
	USER_SAVE_PROJECT_START,
	USER_SAVE_PROJECT_SUCCESS,
	USER_SAVE_PROJECT_INFO,
	USER_DELETE_EDUCATION_START,
	USER_DELETE_EXPERIENCE_START,
	USER_DELETE_PROJECT_START,
	USER_SAVE_BASIC_INFO_START,
	USER_SAVE_BASIC_INFO_FAILED,
	USER_SAVE_BASIC_INFO_SUCCESS,
} from '../actions/user.actions';
import { User } from '../models/user.model';

export interface UserState {
	loading: boolean;
	errorMessage: string;
	currentUser: User;
	personalDetailsSaved: boolean;
	basicDetailsSaved: boolean;
	addressDetailsSaved: boolean;
	educationDetailsSaved: boolean;
	professionalDetailsSaved: boolean;
	projectDetailsSaved: boolean;
	skillDetailsSaved: boolean;
	paymentDetailsSaved: boolean;
}

const initialState: UserState = {
	loading: false,
	errorMessage: null,
	currentUser: null,
	personalDetailsSaved: false,
	basicDetailsSaved: false,
	addressDetailsSaved: false,
	educationDetailsSaved: false,
	professionalDetailsSaved: false,
	projectDetailsSaved: false,
	skillDetailsSaved: false,
	paymentDetailsSaved: false,
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
				basicDetailsSaved: action.payload.isProfileComplete === 'Y',
				addressDetailsSaved: action.payload.isProfileComplete === 'Y',
				educationDetailsSaved: action.payload.isProfileComplete === 'Y',
				professionalDetailsSaved: action.payload.isProfileComplete === 'Y',
				projectDetailsSaved: action.payload.isProfileComplete === 'Y',
				skillDetailsSaved: action.payload.isProfileComplete === 'Y',
				paymentDetailsSaved: action.payload.isProfileComplete === 'Y',
			};
		case USER_GET_DETAILS_FAILED:
		case USER_SAVE_PERSONAL_INFO_FAILED:
		case USER_SAVE_BASIC_INFO_FAILED:
		case USER_SAVE_ADDRESS_INFO_FAILED:
		case USER_SAVE_EDUCATION_FAILED:
		case USER_SAVE_EXPERIENCE_FAILED:
		case USER_SAVE_PROJECT_FAILED:
			return { ...state, loading: false, errorMessage: action.payload };
		case USER_SAVE_PERSONAL_INFO_START:
		case USER_SAVE_BASIC_INFO_START:
		case USER_SAVE_ADDRESS_INFO_START:
		case USER_SAVE_EDUCATION_START:
		case USER_SAVE_EXPERIENCE_START:
		case USER_SAVE_PROJECT_START:
		case USER_DELETE_EDUCATION_START:
		case USER_DELETE_EXPERIENCE_START:
		case USER_DELETE_PROJECT_START:
			return { ...state, loading: true, errorMessage: null };
		case USER_SAVE_PERSONAL_INFO_SUCCESS:
			return { ...state, currentUser: action.payload, loading: false, personalDetailsSaved: true };
		case USER_SAVE_BASIC_INFO_SUCCESS:
			return { ...state, currentUser: action.payload, loading: false, basicDetailsSaved: true };
		case USER_SAVE_ADDRESS_INFO_SUCCESS:
			return { ...state, currentUser: action.payload, loading: false, addressDetailsSaved: true };
		case USER_SAVE_EDUCATION_SUCCESS:
		case USER_SAVE_EXPERIENCE_SUCCESS:
		case USER_SAVE_PROJECT_SUCCESS:
			return { ...state, currentUser: action.payload, loading: false };
		case USER_SAVE_EDUCATIONAL_INFO:
			return { ...state, educationDetailsSaved: true };
		case USER_SAVE_PROFESSIONAL_INFO:
			return { ...state, professionalDetailsSaved: true };
		case USER_SAVE_PROJECT_INFO:
			return { ...state, projectDetailsSaved: true };
		default:
			return state;
	}
}
