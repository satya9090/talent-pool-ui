import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { exhaustMap, map, take } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private store: Store<AppState>) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return this.store.select('authState').pipe(
			take(1),
			map(authState => authState.user),
			exhaustMap(user => {
				const authReq =
					!!user && user.token
						? req.clone({
								setHeaders: { Authorization: 'Bearer ' + user.token }
						  })
						: req;
				return next.handle(authReq);
			})
		);
	}
}
