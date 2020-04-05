import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { JobSeekerLoginComponent } from './job-seeker-login/job-seeker-login.component';
import { JobSeekerRegistrationComponent } from './job-seeker-registration/job-seeker-registration.component';
import { EmployerLoginComponent } from './employer-login/employer-login.component';
import { EmployerRegistrationComponent } from './employer-registration/employer-registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const authRoutes: Routes = [
	{
		path: '',
		component: AuthComponent,
	},
	{ path: 'job-seeker-login', component: JobSeekerLoginComponent },
	{
		path: 'job-seeker-registration',
		component: JobSeekerRegistrationComponent,
	},
	{ path: 'employer-login', component: EmployerLoginComponent },
	{
		path: 'employer-registration',
		component: EmployerRegistrationComponent,
	},
	{ path: 'reset-password', component: ResetPasswordComponent },
	{ path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
	imports: [RouterModule.forChild(authRoutes)],
	exports: [RouterModule],
})
export class AuthRoutingModule {}
