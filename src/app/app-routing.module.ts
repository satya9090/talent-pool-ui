import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		pathMatch: 'full'
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
	},
	{
		path: 'onboarding',
		loadChildren: () =>
			import('./onboarding/onboarding.module').then(mod => mod.OnboardingModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
