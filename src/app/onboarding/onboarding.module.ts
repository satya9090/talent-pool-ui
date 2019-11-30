import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProfessionalInformationComponent } from './professional-information/professional-information.component';
import { EducationalInformationComponent } from './educational-information/educational-information.component';
import { ProfileInformationComponent } from './profile-information/profile-information.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { WebCamModule } from 'ack-angular-webcam';

@NgModule({
	declarations: [
		PersonalInformationComponent,
		ProfessionalInformationComponent,
		EducationalInformationComponent,
		ProfileInformationComponent,
		AboutMeComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		WebCamModule,
		OnboardingRoutingModule
	]
})
export class OnboardingModule {}
