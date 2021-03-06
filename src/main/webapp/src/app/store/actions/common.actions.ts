import { Action } from '@ngrx/store';
import { Country, State } from '../models/common.model';
import { Skill } from '../models/user.model';

export const LOADING_START = 'LOADING_START';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_FAILED = 'LOADING_FAILED';

export class LoadingStart implements Action {
	readonly type = LOADING_START;
}

export class LoadingSuccess implements Action {
	readonly type = LOADING_SUCCESS;

	constructor(public payload: { skills: Skill[] }) {}
}

export class LoadingFailed implements Action {
	readonly type = LOADING_FAILED;

	constructor(public payload: string) {}
}

export type CommonActions = LoadingStart | LoadingSuccess | LoadingFailed;
