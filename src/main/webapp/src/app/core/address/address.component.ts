import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';
import { Address } from '../../store/models/user.model';

@Component({
	selector: 'app-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
	@Input() public restrictEdit: boolean = true;
	@Input() public address: Address;
	@Input() public title: string = '';
	@Output() public saveAddress: EventEmitter<Address>;
	submitted = false;
	addressForm: FormGroup;
	editMode = false;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.addressForm = this.formBuilder.group({
			country: new FormControl(this.address.country, [Validators.required]),
			state: new FormControl(this.address.state, [Validators.required]),
			zipcode: new FormControl(this.address.zipcode, [Validators.required]),
			address: new FormControl(this.address.address, [Validators.required])
		});
	}
	get f() {
		return this.addressForm.controls;
	}
	toggleEditMode() {
		if (this.restrictEdit === false) {
			this.editMode = !this.editMode;
		}
	}

	changeAddress() {
		this.submitted = true;
		if (this.addressForm.invalid) {
			return;
		}
		const updatedAddress: Address = {
			country: this.addressForm.get('country').value,
			state: this.addressForm.get('state').value,
			zipcode: this.addressForm.get('zipcode').value,
			address: this.addressForm.get('address').value
		};
		this.saveAddress.emit(updatedAddress);
	}
}
