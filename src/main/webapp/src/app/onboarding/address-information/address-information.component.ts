import { Component, OnInit } from '@angular/core';
import { Address, User } from '../../store/models/user.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/AppState';
import { Store } from '@ngrx/store';
import { SaveUserAddressInfoStart } from 'src/app/store/actions/user.actions';

@Component({
	selector: 'app-address-information',
	templateUrl: './address-information.component.html',
	styleUrls: ['./address-information.component.scss']
})
export class AddressInformationComponent implements OnInit {
	permanentAddress: Address;
	presentAddress: Address;
	currentUser: User;
	loading = false;
	error: string;
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {}

	ngOnInit() {
		const addressTemplate: Address = {
			country: null,
			state: null,
			city: null,
			pincode: null,
			address: '',
			type: 'permanent'
		};
		this.store.select('userState').subscribe(userState => {
			this.currentUser = userState.currentUser;
			this.loading = userState.loading;
			this.error = userState.errorMessage;
			if (userState.addressDetailsSaved) {
				this.router.navigate(['../educational-info'], {
					relativeTo: this.activatedRoute
				});
			}
			if (this.currentUser) {
				this.permanentAddress = this.currentUser.address.find(addr => addr.type === 'permanent') || {
					...addressTemplate,
					type: 'permanent'
				};
				this.presentAddress = this.currentUser.address.find(addr => addr.type === 'present') || {
					...addressTemplate,
					type: 'present'
				};
			}
		});
	}
	savePresentAddress(presentAddress: Address) {
		this.presentAddress = presentAddress;
	}
	savePermanentAddress(permanentAddress: Address) {
		this.permanentAddress = permanentAddress;
	}
	proceed() {
		this.store.dispatch(
			new SaveUserAddressInfoStart({
				addressList: [this.permanentAddress, this.presentAddress],
				modifiedUser: this.currentUser
			})
		);
	}
}
