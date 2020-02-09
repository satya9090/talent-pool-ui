import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error-interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from '../store/services/user.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorInterceptor', () => {
	let service: UserService;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			providers: [UserService, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }]
		});
		service = TestBed.get(UserService);
	});

	it('should be created', () => {
		service.getUserDetails().subscribe(response => {
			expect(response).toBeTruthy();
		});
	});
});
