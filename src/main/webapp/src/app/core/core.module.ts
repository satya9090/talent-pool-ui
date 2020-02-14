import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoadingComponent } from './loading/loading.component';
import { AddressComponent } from './address/address.component';
import { ChipComponent } from './chip/chip.component';
import { EducationFormComponent } from './education-form/education-form.component';

@NgModule({
	declarations: [LoadingComponent, AddressComponent, ChipComponent, EducationFormComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
	exports: [LoadingComponent, AddressComponent, EducationFormComponent]
})
export class CoreModule {}
