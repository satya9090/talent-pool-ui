import { Action } from '@ngrx/store';
export const TOGGLE_PROFILE_SELECTION = 'TOGGLE_PROFILE_SELECTION';

export class ToggleProfileSelection implements Action {
	readonly type = TOGGLE_PROFILE_SELECTION;
	constructor(public payload: string) {}
}

export type RecruiterActions = ToggleProfileSelection;
