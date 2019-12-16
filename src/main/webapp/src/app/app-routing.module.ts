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
	},
	{
		path: 'job-seeker',
		loadChildren: () =>
			import('./job-seeker/job-seeker.module').then(mod => mod.JobSeekerModule)
	},
	{
		path: 'recruiter',
		loadChildren: () =>
			import('./recruiter/recruiter.module').then(mod => mod.RecruiterModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true })],
	exports: [RouterModule]
})
export class AppRoutingModule {}
