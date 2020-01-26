import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './shared/auth.guard';
import { AppStoreModule } from './store/AppStore.module';
import { UserResolver } from './store/user-resolver';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuard],
		pathMatch: 'full'
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
	},
	{
		path: 'onboarding',
		canLoad: [AuthGuard],
		loadChildren: () => import('./onboarding/onboarding.module').then(mod => mod.OnboardingModule)
	},
	{
		path: 'job-seeker',
		canLoad: [AuthGuard],
		loadChildren: () => import('./job-seeker/job-seeker.module').then(mod => mod.JobSeekerModule)
	},
	{
		path: 'recruiter',
		canLoad: [AuthGuard],
		loadChildren: () => import('./recruiter/recruiter.module').then(mod => mod.RecruiterModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true }), AppStoreModule],
	exports: [RouterModule]
})
export class AppRoutingModule {}
