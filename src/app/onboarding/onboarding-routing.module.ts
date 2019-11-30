import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { EducationalInformationComponent } from './educational-information/educational-information.component';
import { AboutMeComponent } from './about-me/about-me.component';

const onboardingRoutes = [
	{
		path: '',
		component: ProfileInformationComponent,
		children: [
			{
				path: 'personal-info',
				component: PersonalInformationComponent
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
			}
		]
	}
];
@NgModule({
	imports: [RouterModule.forChild(onboardingRoutes)],
	exports: [RouterModule]
})
export class OnboardingRoutingModule {}
