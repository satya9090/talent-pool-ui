import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {
	HttpInterceptor,
	HttpEvent,
	HttpHandler,
	HttpRequest
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterState, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	constructor(private router: Router) {}
	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(
			catchError((err: HttpErrorResponse) => {
				console.log(err);
				if (err.error instanceof Error) {
					// A client-side or network error occurred. Handle it accordingly.
					console.log('An error occurred:', err.error);
				} else {
					// The backend returned an unsuccessful response code.
					// The response body may contain clues as to what went wrong,
					// if (err.status === 401) {
					// 	const state: RouterState = this.router.routerState;
					// 	const snapshot: RouterStateSnapshot = state.snapshot;
					// 	this.router.navigate(['/auth'], {
					// 		queryParams: { returnUrl: snapshot.url }
					// 	});
					// } else if (err.status === 404) {
					// 	this.router.navigate(['/**'], { skipLocationChange: true });
					// } else {
					// 	return Observable.throw(err.error);
					// }
					return throwError(err.error);
				}

				return throwError(err.error);
			})
		);
	}
}
