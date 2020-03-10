import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LoadingComponent } from './loading/loading.component';
import { ChipComponent } from './chip/chip.component';

@NgModule({
	declarations: [LoadingComponent, ChipComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
	exports: [LoadingComponent]
})
export class CoreModule {}
