import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AppStoreModule } from '../store/AppStore.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [AuthGuard],
			imports: [AppStoreModule, RouterTestingModule]
		});
	});

	it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
		expect(guard).toBeTruthy();
	}));
});
