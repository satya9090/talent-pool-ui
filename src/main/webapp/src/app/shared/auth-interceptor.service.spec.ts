import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from '../store/services/user.service';

describe('AuthInterceptor', () => {
	let service: UserService;
	let httpMock: HttpTestingController;
	beforeEach(() =>
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [
				UserService,
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthInterceptor,
					multi: true
				}
			]
		})
	);

	it('should add an Authorization header', () => {
		service.getUserDetails().subscribe(response => {
			expect(response).toBeTruthy();
		});

		const httpRequest = httpMock.expectOne('/TalentPool/api/v1/getUser');

		expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
	});
});
