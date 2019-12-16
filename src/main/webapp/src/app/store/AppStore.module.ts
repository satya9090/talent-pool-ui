import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthReducer } from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';
import { JobSeekerReducer } from './reducers/jobseeker.reducer';
import { RecruiterReducer } from './reducers/recruiter.reducer';

@NgModule({
	imports: [
		HttpClientModule,
		EffectsModule.forRoot([AuthEffects]),
		StoreModule.forRoot({
			authState: AuthReducer,
			jobSeekerState: JobSeekerReducer,
			recruiterState: RecruiterReducer
		})
	],
	exports: [StoreModule]
})
export class AppStoreModule {}
