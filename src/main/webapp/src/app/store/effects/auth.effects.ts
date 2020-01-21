import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
	HttpParams
} from '@angular/common/http';
import { of } from 'rxjs';
import {
	AuthLoginStart,
	AuthFailed,
	AuthSuccess,
	AUTH_LOGIN_START,
	AUTH_REGISTRATION_START,
	AuthRegistrationStart,
	AUTH_AUTO_LOGIN,
	AUTH_LOGOUT,
	AuthLogout,
	AUTH_FORGOT_PASSWORD_START,
	AuthForgotPasswordStart,
	AuthForgotPasswordComplete
} from '../actions/auth.actions';
import { AuthResponse, AuthUser } from '../models/auth.model';

@Injectable()
export class AuthEffects {
	tokenExpirationTimer = null;
	@Effect()
	Login$ = this.actions$.pipe(
		ofType(AUTH_LOGIN_START),
		switchMap((authData: AuthLoginStart) => {
			const body = new HttpParams()
				.set('grant_type', 'password')
				.set('client_id', 'Huntill')
				.set('username', authData.payload.userName)
				.set('password', authData.payload.password);

			const headers = new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: 'Basic ' + btoa('Huntill:nucigent')
			});

			return this.http
				.post<AuthResponse>('/TalentPool/oauth/token', body.toString(), {
					headers
				})
				.pipe(
					map(response => {
						const expirationDate = new Date(
							new Date().getTime() + response.expires_in * 1000
						);
						const authUser = new AuthUser(
							response.access_token,
							response.token_type,
							response.refresh_token,
							expirationDate,
							response.scope.split(' ')
						);
						localStorage.setItem('auth', JSON.stringify(authUser));
						return new AuthSuccess(authUser);
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
			return this.http
				.post('/TalentPool/api/v1/createUser', authData.payload)
				.pipe(
					map(response => {
						return new AuthSuccess(null);
					}),
					catchError((error: HttpErrorResponse) => {
						return of(new AuthFailed(error.message));
					})
				);
		})
	);

	@Effect()
	forgotPassword = this.actions$.pipe(
		ofType(AUTH_FORGOT_PASSWORD_START),
		switchMap((data: AuthForgotPasswordStart) => {
			return this.http
				.post('/TalentPool/api/v1/forgotPassword', {
					emailId: data.payload
				})
				.pipe(
					map(() => {
						return new AuthForgotPasswordComplete();
					}),
					catchError(() => {
						return of(new AuthForgotPasswordComplete());
					})
				);
		})
	);

	@Effect()
	autoLogin = this.actions$.pipe(
		ofType(AUTH_AUTO_LOGIN),
		map(() => {
			const userData: {
				access_token: string;
				refresh_token: string;
				token_type: string;
				role: string[];
				expires_in: string;
			} = JSON.parse(localStorage.getItem('auth'));
			if (!userData) {
				return { type: 'DUMMY' };
			}
			const loadedUser = new AuthUser(
				userData.access_token,
				userData.token_type,
				userData.refresh_token,
				new Date(userData.expires_in),
				userData.role
			);
			if (loadedUser.token) {
				const expirationDuration =
					new Date(loadedUser.expiresIn).getTime() - new Date().getTime();
				this.tokenExpirationTimer = setTimeout(() => {
					this.logout();
				}, expirationDuration);
				return new AuthSuccess(loadedUser);
			}
			return { type: 'DUMMY' };
		})
	);
	@Effect()
	authLogout = this.actions$.pipe(
		ofType(AUTH_LOGOUT),
		tap(() => {
			this.logout();
		})
	);

	logout() {
		clearTimeout(this.tokenExpirationTimer);
		localStorage.removeItem('auth');
		this.router.navigate(['/auth']);
		return new AuthLogout();
	}

	constructor(
		private actions$: Actions,
		private http: HttpClient,
		private router: Router
	) {}
}
