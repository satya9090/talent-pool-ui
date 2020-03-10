import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
import { ProjectInformationComponent } from './project-information/project-information.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { EducationFormComponent } from './education-form/education-form.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ProfessionalDetailsFormComponent } from './professional-details-form/professional-details-form.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent } from './address/address.component';
import { AddressFormComponent } from './address-form/address-form.component';

@NgModule({
	declarations: [
		PersonalInformationComponent,
		ProfessionalInformationComponent,
		ProjectInformationComponent,
		EducationalInformationComponent,
		ProfileInformationComponent,
		AboutMeComponent,
		AddressInformationComponent,
		PaymentComponent,
		SkillsComponent,
		EducationDetailsComponent,
		EducationFormComponent,
		ProfessionalDetailsComponent,
		ProfessionalDetailsFormComponent,
		ProjectDetailsComponent,
		ProjectFormComponent,
		AddressComponent,
		AddressFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		WebCamModule,
		OnboardingRoutingModule,
		CoreModule,
		FontAwesomeModule,
		NgbModule
	]
})
export class OnboardingModule {}
