import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('ErrorInterceptor', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
		})
	);

	it('should be created', () => {
		const service: ErrorInterceptor = TestBed.get(ErrorInterceptor);
		expect(service).toBeTruthy();
	});
});
