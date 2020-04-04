import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	USER_GET_DETAILS_START,
	USER_SAVE_PERSONAL_INFO_START,
	USER_SAVE_EDUCATION_START,
	USER_SAVE_EXPERIENCE_START,
	USER_SAVE_PROJECT_START,
	USER_DELETE_EDUCATION_START,
	USER_DELETE_EXPERIENCE_START,
	USER_DELETE_PROJECT_START,
	USER_SAVE_ADDRESS_INFO_START,
	USER_SAVE_BASIC_INFO_START,
	SaveUserPersonalInfoStart,
	SaveUserAddressInfoStart,
	GetUserDetailsSuccess,
	GetUserDetailsFailed,
	SaveUserPersonalInfoSuccess,
	SaveUserPersonalInfoFailed,
	SaveUserAddressInfoSuccess,
	SaveUserAddressInfoFailed,
	SaveUserEducationStart,
	SaveUserEducationSuccess,
	SaveUserEducationFailed,
	SaveUserExperienceStart,
	SaveUserExperienceSuccess,
	SaveUserExperienceFailed,
	SaveUserProjectStart,
	SaveUserProjectSuccess,
	SaveUserProjectFailed,
	DeleteUserEducationStart,
	DeleteUserExperienceStart,
	DeleteUserProjectStart,
	SaveUserBasicInfoStart,
	SaveUserBasicInfoSuccess,
	SaveUserBasicInfoFailed,
} from '../actions/user.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class UserEffects {
	@Effect()
	getUserDetails = this.actions$.pipe(
		ofType(USER_GET_DETAILS_START),
		switchMap(() => {
			return this.userService.getUserDetails().pipe(
				map((response) => new GetUserDetailsSuccess(response)),
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
				map((response) => {
					return new SaveUserPersonalInfoSuccess(response);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserPersonalInfoFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserBasicInfo = this.actions$.pipe(
		ofType(USER_SAVE_BASIC_INFO_START),
		switchMap((data: SaveUserBasicInfoStart) => {
			return this.userService.saveBasicInfo(data.payload).pipe(
				map((response) => {
					return new SaveUserBasicInfoSuccess(response);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserBasicInfoFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserAddressInfo = this.actions$.pipe(
		ofType(USER_SAVE_ADDRESS_INFO_START),
		switchMap((data: SaveUserAddressInfoStart) => {
			return this.userService.saveAddressInfo(data.payload.addressList).pipe(
				map((response) => new SaveUserAddressInfoSuccess(data.payload.modifiedUser)),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserAddressInfoFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserEducationInfo = this.actions$.pipe(
		ofType(USER_SAVE_EDUCATION_START),
		switchMap((data: SaveUserEducationStart) => {
			return this.userService.saveEducation(data.payload.education).pipe(
				map((response) => {
					const user = { ...data.payload.modifiedUser };
					user.educationDetails = data.payload.modifiedUser.educationDetails.map((edu) => {
						if (edu.educationId) {
							return edu;
						} else {
							return response;
						}
					});
					return new SaveUserEducationSuccess(user);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserEducationFailed(error.message));
				})
			);
		})
	);

	@Effect()
	deleteUserEducationInfo = this.actions$.pipe(
		ofType(USER_DELETE_EDUCATION_START),
		switchMap((data: DeleteUserEducationStart) => {
			return this.userService.deleteEducation(data.payload.education).pipe(
				map((response) => new SaveUserEducationSuccess(data.payload.modifiedUser)),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserEducationFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserProfessionalInfo = this.actions$.pipe(
		ofType(USER_SAVE_EXPERIENCE_START),
		switchMap((data: SaveUserExperienceStart) => {
			return this.userService.saveProfessionalInfo(data.payload.experience).pipe(
				map((response) => {
					const user = { ...data.payload.modifiedUser };
					user.professionalDetails = data.payload.modifiedUser.professionalDetails.map((exp) => {
						if (exp.professionalDetailsId) {
							return exp;
						} else {
							return response;
						}
					});
					return new SaveUserExperienceSuccess(data.payload.modifiedUser);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserExperienceFailed(error.message));
				})
			);
		})
	);

	@Effect()
	deleteUserProfessionalInfo = this.actions$.pipe(
		ofType(USER_DELETE_EXPERIENCE_START),
		switchMap((data: DeleteUserExperienceStart) => {
			return this.userService.deleteProfessionalInfo(data.payload.experience).pipe(
				map((response) => new SaveUserExperienceSuccess(data.payload.modifiedUser)),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserExperienceFailed(error.message));
				})
			);
		})
	);

	@Effect()
	saveUserProjectInfo = this.actions$.pipe(
		ofType(USER_SAVE_PROJECT_START),
		switchMap((data: SaveUserProjectStart) => {
			return this.userService.saveProject(data.payload.project).pipe(
				map((response) => {
					const user = { ...data.payload.modifiedUser };
					user.projectDetails = data.payload.modifiedUser.projectDetails.map((proj) => {
						if (proj.projectDetails) {
							return proj;
						} else {
							return response;
						}
					});

					return new SaveUserProjectSuccess(data.payload.modifiedUser);
				}),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserProjectFailed(error.message));
				})
			);
		})
	);

	@Effect()
	deleteUserProjectInfo = this.actions$.pipe(
		ofType(USER_DELETE_PROJECT_START),
		switchMap((data: DeleteUserProjectStart) => {
			return this.userService.deleteProject(data.payload.project).pipe(
				map((response) => new SaveUserProjectSuccess(data.payload.modifiedUser)),
				catchError((error: HttpErrorResponse) => {
					return of(new SaveUserProjectFailed(error.message));
				})
			);
		})
	);

	constructor(private actions$: Actions, private userService: UserService) {}
}
