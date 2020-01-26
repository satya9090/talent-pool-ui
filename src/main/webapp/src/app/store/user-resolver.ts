import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import { User } from './models/user.model';
import { AppState } from './AppState';
import { UserActionSuccess, GetUserDetailsStart } from './actions/user.actions';
import { UserService } from './services/user.service';

@Injectable()
export class UserResolver implements Resolve<User> {
	constructor(private store: Store<AppState>, private userService: UserService) {}
	resolve(route: ActivatedRouteSnapshot): Observable<User> | Promise<User> | User {
		return this.store.select('userState').pipe(
			take(1),
			map(userState => {
				if (!!userState.currentUser) return userState.currentUser;
				else {
					return null;
				}
			}),
			switchMap((user: User) => {
				if (!!user) {
					console.log(user);
					return new Observable<User>(subscriber => subscriber.next(user));
				} else {
					console.log('here');
					return this.userService.getUserDetails().pipe(
						map(userDetails => {
							this.store.dispatch(new UserActionSuccess(userDetails));
							return userDetails;
						})
					);
				}
			})
		);
	}
}
