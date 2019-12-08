import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { JobSeekerLoginComponent } from './job-seeker-login/job-seeker-login.component';
import { JobSeekerRegistrationComponent } from './job-seeker-registration/job-seeker-registration.component';
import { EmployeerLoginComponent } from './employeer-login/employeer-login.component';
import { EmployeerRegistartionComponent } from './employeer-registartion/employeer-registartion.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const authRoutes: Routes = [
	{
		path: '',
		component: AuthComponent
	},
	{ path: 'job-seeker-login', component: JobSeekerLoginComponent },
	{
		path: 'job-seeker-registration',
		component: JobSeekerRegistrationComponent
	},
	{ path: 'employeer-login', component: EmployeerLoginComponent },
	{
		path: 'employeer-registration',
		component: EmployeerRegistartionComponent
	},
	{ path: 'reset-password', component: ResetPasswordComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
	imports: [RouterModule.forChild(authRoutes)],
	exports: [RouterModule]
})
export class AuthRoutingModule {}
