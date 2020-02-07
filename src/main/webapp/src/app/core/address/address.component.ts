import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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
	@Output() public saveAddress = new EventEmitter<Address>();
	submitted = false;
	addressForm: FormGroup;
	editMode = false;
	countries = [];
	states = [];
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		console.log(this.address);
		this.addressForm = this.formBuilder.group({
			country: new FormControl(this.address.country, [Validators.required]),
			state: new FormControl(this.address.state, [Validators.required]),
			city: new FormControl(this.address.city, [Validators.required]),
			pincode: new FormControl(this.address.pincode, [Validators.required]),
			address: new FormControl(this.address.address, [Validators.required]),
			type: new FormControl(this.address.type, [Validators.required])
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
			pincode: +this.addressForm.get('pincode').value,
			address: this.addressForm.get('address').value,
			city: this.addressForm.get('city').value,
			type: this.addressForm.get('type').value
		};
		this.saveAddress.emit(updatedAddress);
		this.editMode = false;
	}
}
