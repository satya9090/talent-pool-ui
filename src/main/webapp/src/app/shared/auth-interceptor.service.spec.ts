import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { UserService } from '../store/services/user.service';
import { AppStoreModule } from '../store/AppStore.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthUser } from '../store/models/auth.model';
import { Store } from '@ngrx/store';

describe('AuthInterceptor', () => {
	let service: UserService;
	let httpMock: HttpTestingController;
	const currDate = new Date();
	const initialState = {
		authState: {
			user: null
		}
	};
	let store: MockStore<{ authState: { user: AuthUser } }>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			providers: [
				UserService,
				provideMockStore({ initialState }),
				{
					provide: HTTP_INTERCEPTORS,
					useClass: AuthInterceptor,
					multi: true
				}
			]
		});
		service = TestBed.get(UserService);
		httpMock = TestBed.get(HttpTestingController);
		store = TestBed.get<Store<{ authState: { user: AuthUser } }>>(Store);
	});

	it('should not add an Authorization header when user is null', () => {
		service.getUserDetails().subscribe(response => {
			expect(response).toBeTruthy();
		});

		const httpRequest = httpMock.expectOne({ method: 'GET', url: '/TalentPool/api/v1/getUser' });

		expect(httpRequest.request.headers.has('Authorization')).toEqual(false);
	});

	it('should add an Authorization header', () => {
		store.setState({
			authState: {
				user: new AuthUser(
					'sample token',
					'Bearer',
					'sample refresh token',
					new Date(currDate.setHours(currDate.getHours() + 2)),
					['user']
				)
			}
		});
		service.getUserDetails().subscribe(response => {
			expect(response).toBeTruthy();
		});

		const httpRequest = httpMock.expectOne({ method: 'GET', url: '/TalentPool/api/v1/getUser' });

		expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
	});
});
