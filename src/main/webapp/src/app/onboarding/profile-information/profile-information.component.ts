import { Component, OnInit } from '@angular/core';
import {
	faAddressCard,
	faGraduationCap,
	faUser,
	faDollarSign,
	faGlobe,
	faTools,
	faToolbox,
	faUserCog,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';

@Component({
	selector: 'app-profile-information',
	templateUrl: './profile-information.component.html',
	styleUrls: ['./profile-information.component.scss'],
})
export class ProfileInformationComponent implements OnInit {
	faAddressCard = faAddressCard;
	faGraduationCap = faGraduationCap;
	faUser = faUser;
	faDollarSign = faDollarSign;
	faGlobe = faGlobe;
	faTools = faTools;
	faToolbox = faToolbox;
	faUserCog = faUserCog;
	faCheck = faCheck;
	personalDetailsSaved = false;
	basicDetailsSaved = false;
	addressDetailsSaved = false;
	educationDetailsSaved = false;
	professionalDetailsSaved = false;
	projectDetailsSaved = false;
	skillDetailsSaved = false;
	paymentDetailsSaved = false;
	constructor(private store: Store<AppState>) {
		this.store.select('userState').subscribe((userState) => {
			this.personalDetailsSaved = userState.personalDetailsSaved;
			this.addressDetailsSaved = userState.addressDetailsSaved;
			this.professionalDetailsSaved = userState.professionalDetailsSaved;
			this.educationDetailsSaved = userState.educationDetailsSaved;
			this.projectDetailsSaved = userState.projectDetailsSaved;
			this.basicDetailsSaved = userState.basicDetailsSaved;
			this.skillDetailsSaved = userState.skillDetailsSaved;
			this.paymentDetailsSaved = userState.paymentDetailsSaved;
		});
	}

	ngOnInit() {}
}
