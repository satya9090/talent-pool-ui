import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { User } from './models/user.model';
import { AppState } from './AppState';
import { UserActionSuccess, GetUserDetailsStart, USER_ACTION_SUCCESS } from './actions/user.actions';
import { UserService } from './services/user.service';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Actions, ofType } from '@ngrx/effects';

@Injectable()
export class UserResolver implements Resolve<User> {
	constructor(private store: Store<AppState>, private actions$: Actions) {}
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> {
		return this.store.select('userState').pipe(
			take(1),
			map(userState => {
				if (!!userState.currentUser) return userState.currentUser;
				else {
					return null;
				}
			}),
			switchMap((user: User) => {
				if (!user) {
					this.store.dispatch(new GetUserDetailsStart());
					return this.actions$.pipe(ofType(USER_ACTION_SUCCESS), take(1));
				} else {
					return of(user);
				}
			})
		);
	}
}
