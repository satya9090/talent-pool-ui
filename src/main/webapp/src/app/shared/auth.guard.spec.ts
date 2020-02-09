import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

import { AuthGuard } from './auth.guard';
import { AuthUser } from '../store/models/auth.model';

describe('AuthGuard', () => {
	const initialState = {
		authState: {
			user: null
		}
	};
	let guard: AuthGuard;
	let store: MockStore<{ authState: { user: AuthUser } }>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthGuard, provideMockStore({ initialState })],
			imports: [RouterTestingModule]
		});
		store = TestBed.get<Store<{ authState: { user: AuthUser } }>>(Store);
		guard = TestBed.get<AuthGuard>(AuthGuard);
	});

	it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
		expect(guard).toBeTruthy();
	}));
});
