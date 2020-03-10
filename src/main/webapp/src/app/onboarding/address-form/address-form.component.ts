import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Address } from 'src/app/store/models/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-address-form',
	templateUrl: './address-form.component.html',
	styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
	@Input() address: Address;
	@Output() onSave = new EventEmitter<Address>();
	@Output() onCancel = new EventEmitter<void>();
	addressForm: FormGroup;
	submitted = false;
	constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {}

	ngOnInit(): void {
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
		this.onSave.emit(updatedAddress);
		this.activeModal.dismiss('data saved');
	}
	cancel() {
		this.activeModal.dismiss('Cross click');
		this.onCancel.emit();
	}
}
