import { Component, OnInit } from '@angular/core';
import { Address } from '../../store/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-address-information',
	templateUrl: './address-information.component.html',
	styleUrls: ['./address-information.component.scss']
})
export class AddressInformationComponent implements OnInit {
	permanentAddress: Address;
	presentAddress: Address;
	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {
		this.permanentAddress = {
			country: null,
			state: null,
			city: null,
			pincode: null,
			address: '',
			type: 'permanent'
		};
		this.presentAddress = {
			country: '',
			state: '',
			city: '',
			pincode: null,
			address: '',
			type: 'present'
		};
	}
	savePresentAddress(presentAddress: Address) {
		this.presentAddress = presentAddress;
	}
	savePermanentAddress(permanentAddress: Address) {
		this.permanentAddress = permanentAddress;
	}
	proceed() {
		this.router.navigate(['../educational-info'], {
			relativeTo: this.activatedRoute
		});
	}
}
