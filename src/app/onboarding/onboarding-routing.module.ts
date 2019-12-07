import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { EducationalInformationComponent } from './educational-information/educational-information.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AddressInformationComponent } from './address-information/address-information.component';
import { PaymentComponent } from './payment/payment.component';

const onboardingRoutes: Routes = [
	{
		path: '',
		component: ProfileInformationComponent,
		children: [
			{
				path: '',
				redirectTo: 'personal-info',
				pathMatch: 'full'
			},
			{
				path: 'personal-info',
				component: PersonalInformationComponent
			},
			{
				path: 'address-info',
				component: AddressInformationComponent
			},
			{
				path: 'professional-info',
				component: ProfessionalInformationComponent
			},
			{
				path: 'educational-info',
				component: EducationalInformationComponent
			},
			{
				path: 'about-me',
				component: AboutMeComponent
			},
			{
				path: 'payment',
				component: PaymentComponent
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(onboardingRoutes)],
	exports: [RouterModule]
})
export class OnboardingRoutingModule {}
