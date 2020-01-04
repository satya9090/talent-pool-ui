import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanLoad,
	Route,
	UrlSegment,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { map, take } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
	constructor(private store: Store<AppState>) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return true;
	}
	canLoad(
		route: Route,
		segments: UrlSegment[]
	): Observable<boolean> | Promise<boolean> | boolean {
		return this.store.select('authState').pipe(
			take(1),
			map(authState => {
				return !!authState.user && authState.user.token !== '';
			})
		);
	}
}
