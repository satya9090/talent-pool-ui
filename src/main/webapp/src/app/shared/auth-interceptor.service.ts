import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import {
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest
} from '@angular/common/http';
import { getStoredUser } from './helper';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const loadedUser = getStoredUser();
		const authReq =
			!!loadedUser && loadedUser.token
				? req.clone({
						setHeaders: { Authorization: 'Bearer ' + loadedUser.token }
				  })
				: req;
		return next.handle(authReq);
	}
}
