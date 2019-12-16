import {
	AuthLoginStart,
	AuthFailed,
	AuthSuccess,
	AUTH_LOGIN_START,
	AUTH_REGISTRATION_START,
	AuthRegistrationStart
} from '../actions/auth.actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
	@Effect()
	Login$ = this.actions$.pipe(
		ofType(AUTH_LOGIN_START),
		switchMap((authData: AuthLoginStart) => {
			return this.http.post<any>('/api/login', authData.payload).pipe(
				map(response => {
					return new AuthSuccess(response);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new AuthFailed(error.message));
				})
			);
		})
	);

	@Effect()
	Register = this.actions$.pipe(
		ofType(AUTH_REGISTRATION_START),
		switchMap((authData: AuthRegistrationStart) => {
			return this.http.post('', authData.payload).pipe(
				map(response => {
					return new AuthSuccess(response);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new AuthFailed(error.message));
				})
			);
		})
	);

	constructor(private actions$: Actions, private http: HttpClient) {}
}
