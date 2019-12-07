import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './loading/loading.component';
import { AddressComponent } from './address/address.component';

@NgModule({
	declarations: [LoadingComponent, AddressComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule],
	exports: [LoadingComponent, AddressComponent]
})
export class CoreModule {}
