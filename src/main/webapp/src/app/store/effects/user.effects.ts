import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	USER_GET_DETAILS_START,
	USER_ACTION_SUCCESS,
	USER_ACTION_FAILED,
	USER_SAVE_PERSONAL_INFO_START,
	UserActionSuccess,
	UserActionFailed,
	SaveUserPersonalInfoStart
} from '../actions/user.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
	@Effect()
	getUserDetails = this.actions$.pipe(
		ofType(USER_GET_DETAILS_START),
		switchMap(() => {
			return this.userService.getUserDetails().pipe(
				map(response => new UserActionSuccess(response)),
				catchError((error: HttpErrorResponse) => {
					return of(new UserActionFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserPersonalInfo = this.actions$.pipe(
		ofType(USER_SAVE_PERSONAL_INFO_START),
		switchMap((data: SaveUserPersonalInfoStart) => {
			return this.userService.savePersonalInfo(data.payload).pipe(
				map(response => new UserActionSuccess(data.payload)),
				catchError((error: HttpErrorResponse) => {
					return of(new UserActionFailed(error.message));
				})
			);
		})
	);

	constructor(private actions$: Actions, private userService: UserService) {}
}
