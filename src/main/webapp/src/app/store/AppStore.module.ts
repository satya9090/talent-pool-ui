import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthReducer } from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';
import { JobSeekerReducer } from './reducers/jobseeker.reducer';
import { RecruiterReducer } from './reducers/recruiter.reducer';
import { UserReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effects';

@NgModule({
	imports: [
		HttpClientModule,
		EffectsModule.forRoot([AuthEffects, UserEffects]),
		StoreModule.forRoot({
			authState: AuthReducer,
			jobSeekerState: JobSeekerReducer,
			recruiterState: RecruiterReducer,
			userState: UserReducer
		})
	],
	exports: [StoreModule]
})
export class AppStoreModule {}
