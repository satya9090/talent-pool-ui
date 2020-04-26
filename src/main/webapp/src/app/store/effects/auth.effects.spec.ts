import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthEffects } from './auth.effects';
import { AuthLoginSuccess, AUTH_LOGIN_START } from '../actions/auth.actions';
import { AuthUser } from '../models/auth.model';
import { Action } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthEffects', () => {
	let effects: AuthEffects;
	let actions: Observable<Action>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule, RouterTestingModule],
			providers: [AuthEffects, provideMockActions(() => actions)],
		});
		effects = TestBed.inject(AuthEffects);
	});
	it('login should work', () => {
		const authUser = new AuthUser('', 'bearer', '', new Date(), ['user']);
		const completion = new AuthLoginSuccess(authUser);

		actions = of({ type: AUTH_LOGIN_START, payload: { userName: '', password: '' } });

		effects.login$.subscribe((action) => {
			expect(action).toEqual(completion);
		});
	});
});
