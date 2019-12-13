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
import { AddressInformationComponent } from './address-information/address-information.component';
import { CoreModule } from '../core/core.module';
import { PaymentComponent } from './payment/payment.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
	declarations: [
		PersonalInformationComponent,
		ProfessionalInformationComponent,
		EducationalInformationComponent,
		ProfileInformationComponent,
		AboutMeComponent,
		AddressInformationComponent,
		PaymentComponent,
		SkillsComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		WebCamModule,
		OnboardingRoutingModule,
		CoreModule
	]
})
export class OnboardingModule {}
