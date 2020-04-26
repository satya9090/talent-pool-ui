import { Country, State } from '../models/common.model';
import { CommonActions, LOADING_START, LOADING_SUCCESS, LOADING_FAILED } from '../actions/common.actions';
import { Skill } from '../models/user.model';

export interface CommonState {
	countries: Country[];
	states: State[];
	skills: Skill[];
	loading: boolean;
	errorMessage: string;
}

const initialState: CommonState = {
	countries: [],
	states: [],
	skills: [],
	loading: false,
	errorMessage: null,
};

export function CommonReducer(state = initialState, action: CommonActions) {
	switch (action.type) {
		case LOADING_START:
			return { ...state, loading: true };
		case LOADING_SUCCESS:
			return { ...state, skills: action.payload.skills, loading: false };
		case LOADING_FAILED:
			return { ...state, loading: false, errorMessage: action.payload };
		default:
			return state;
	}
}
