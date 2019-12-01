import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AuthReducer } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';

@NgModule({
	imports: [
		HttpClientModule,
		EffectsModule.forRoot([AuthEffects]),
		StoreModule.forRoot({ authState: AuthReducer })
	],
	exports: [StoreModule]
})
export class AppStoreModule {}
