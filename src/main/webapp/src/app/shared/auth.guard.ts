import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanLoad,
	Route,
	UrlSegment,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { map, take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private store: Store<AppState>, private router: Router) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.store.select('authState').pipe(
			take(1),
			map(authState => {
				if (!!authState.user && authState.user.token !== '') {
					return true;
				}
				return this.router.createUrlTree(['/auth']);
			})
		);
	}
	canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
		return this.store.select('authState').pipe(
			take(1),
			map(authState => {
				return !!authState.user && authState.user.token !== '';
			})
		);
	}
}
