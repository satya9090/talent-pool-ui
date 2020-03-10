import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import { Address } from '../../store/models/user.model';
import { AddressFormComponent } from '../address-form/address-form.component';

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
	countries = [];
	states = [];
	isAddressInvalid = true;
	faPencilAlt = faPencilAlt;
	constructor(private modalService: NgbModal) {}

	ngOnInit() {
		this.isAddressInvalid = !this.validateAddress(this.address);
		this.title = (this.address.type || 'Present') + ' Address';
	}

	toggleEditMode() {
		const modalRef = this.modalService.open(AddressFormComponent, { size: 'xl', centered: true });
		modalRef.componentInstance.address = this.address;
		modalRef.componentInstance.onSave.subscribe($event => {
			this.save($event);
		});
		modalRef.componentInstance.onCancel.subscribe($event => {
			this.cancelEdit();
		});
	}

	isEmptyOrSpaces(str: string) {
		return str === null || str.match(/^ *$/) !== null;
	}
	validateAddress(address: Address) {
		return !(
			this.isEmptyOrSpaces(address.country) ||
			this.isEmptyOrSpaces(address.state) ||
			this.isEmptyOrSpaces(address.city) ||
			this.isEmptyOrSpaces(address.pincode.toString())
		);
	}
	save(updatedAddress: Address) {
		this.isAddressInvalid = !this.validateAddress(updatedAddress);
		this.title = (updatedAddress.type || 'Present') + ' Address';
		this.saveAddress.emit(updatedAddress);
	}
	cancelEdit() {}
}
