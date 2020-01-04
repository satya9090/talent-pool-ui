import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
	HttpParams
} from '@angular/common/http';
import { take, map, exhaustMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
	constructor(private store: Store<AppState>) {}

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		return this.store.select('authState').pipe(
			take(1),
			map(authState => {
				console.log(authState);
				return authState.user;
			}),
			exhaustMap(user => {
				console.log(user);
				if (!user) {
					return next.handle(req);
				}
				const modifiedReq = req.clone({
					params: new HttpParams().set('Bearer', user.token)
				});
				return next.handle(modifiedReq);
			})
		);
	}
}
