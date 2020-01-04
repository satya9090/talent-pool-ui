import { Country, State } from '../models/common.model';
import { CommonActions, LOADING_START } from '../actions/common.actions';

export interface CommonState {
	countries: Country[];
	states: State[];
	loading: boolean;
	errorMessage: string;
}

const initialState: CommonState = {
	countries: [],
	states: [],
	loading: false,
	errorMessage: null
};

export function CommonReducer(state = initialState, action: CommonActions) {
	switch (action.type) {
		case LOADING_START:
			return { ...state, loading: true };
		default:
			return state;
	}
}
