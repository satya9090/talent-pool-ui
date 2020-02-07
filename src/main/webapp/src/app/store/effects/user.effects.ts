import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	USER_GET_DETAILS_START,
	USER_SAVE_PERSONAL_INFO_START,
	SaveUserPersonalInfoStart,
	USER_SAVE_ADDRESS_INFO_START,
	SaveUserAddressInfoStart,
	GetUserDetailsSuccess,
	GetUserDetailsFailed,
	SaveUserPersonalInfoSuccess,
	SaveUserPersonalInfoFailed,
	SaveUserAddressInfoSuccess,
	SaveUserAddressInfoFailed
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
				map(response => new GetUserDetailsSuccess(response)),
				catchError((error: HttpErrorResponse) => {
					return of(new GetUserDetailsFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserPersonalInfo = this.actions$.pipe(
		ofType(USER_SAVE_PERSONAL_INFO_START),
		switchMap((data: SaveUserPersonalInfoStart) => {
			return this.userService.savePersonalInfo(data.payload).pipe(
				map(response => {
					console.log(response);
					return new SaveUserPersonalInfoSuccess(data.payload);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserPersonalInfoFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserAddressInfo = this.actions$.pipe(
		ofType(USER_SAVE_ADDRESS_INFO_START),
		switchMap((data: SaveUserAddressInfoStart) => {
			return this.userService.saveAddressInfo(data.payload.addressList).pipe(
				map(response => new SaveUserAddressInfoSuccess(data.payload.modifiedUser)),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserAddressInfoFailed(error.message));
				})
			);
		})
	);

	constructor(private actions$: Actions, private userService: UserService) {}
}
