import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	USER_GET_DETAILS_START,
	GetUserDetailsSuccess,
	GetUserDetailsFail
} from '../actions/user.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
	@Effect()
	getUserDetails = this.actions$.pipe(
		ofType(USER_GET_DETAILS_START),
		switchMap(() => {
			return this.http.get('/TalentPool/api/v1/getUser').pipe(
				map(response => new GetUserDetailsSuccess(response)),
				catchError((error: HttpErrorResponse) => {
					return of(new GetUserDetailsFail(error.message));
				})
			);
		})
	);
	constructor(private actions$: Actions, private http: HttpClient) {}
}
