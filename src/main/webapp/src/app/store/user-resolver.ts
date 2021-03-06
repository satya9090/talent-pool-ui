import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { User } from './models/user.model';
import { AppState } from './AppState';
import { GetUserDetailsStart, USER_GET_DETAILS_SUCCESS } from './actions/user.actions';
import { Actions, ofType } from '@ngrx/effects';
import { LoadingStart, LOADING_SUCCESS } from './actions/common.actions';

@Injectable()
export class UserResolver implements Resolve<User> {
	constructor(private store: Store<AppState>, private actions$: Actions) {}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> {
		return this.store.select('userState').pipe(
			take(1),
			map((userState) => {
				if (!!userState.currentUser) {
					return userState.currentUser;
				}
				return null;
			}),
			switchMap((user: User) => {
				if (!user) {
					this.store.dispatch(new GetUserDetailsStart());
					this.store.dispatch(new LoadingStart());
					return this.actions$.pipe(ofType(USER_GET_DETAILS_SUCCESS), take(1), ofType(LOADING_SUCCESS), take(2));
				} else {
					return of(user);
				}
			})
		);
	}
}
