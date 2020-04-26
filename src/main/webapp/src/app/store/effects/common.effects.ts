import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LOADING_START, LoadingSuccess, LoadingFailed } from '../actions/common.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of, forkJoin } from 'rxjs';
import { Skill } from '../models/user.model';

@Injectable()
export class CommonEffects {
	@Effect()
	initialLoad = this.actions$.pipe(
		ofType(LOADING_START),
		switchMap(() => {
			const getAllSkills = this.http.get<Skill[]>('/TalentPool/api/v1/getAllSkills');
			return forkJoin([getAllSkills]).pipe(
				map((response) => new LoadingSuccess({ skills: response[0] })),
				catchError((error: HttpErrorResponse) => {
					return of(new LoadingFailed(error.message));
				})
			);
		})
	);
	constructor(private actions$: Actions, private http: HttpClient) {}
}
