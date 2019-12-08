import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './loading/loading.component';
import { AddressComponent } from './address/address.component';
import { ChipComponent } from './chip/chip.component';

@NgModule({
	declarations: [LoadingComponent, AddressComponent, ChipComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [LoadingComponent, AddressComponent]
})
export class CoreModule {}
