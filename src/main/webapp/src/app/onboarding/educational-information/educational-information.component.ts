import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { User, EducationalDetails } from 'src/app/store/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { SaveUserEducationalInfoStart } from 'src/app/store/actions/user.actions';

@Component({
	selector: 'app-educational-information',
	templateUrl: './educational-information.component.html',
	styleUrls: ['./educational-information.component.scss']
})
export class EducationalInformationComponent implements OnInit {
	educations: EducationalDetails[];
	currentUser: User;
	loading = false;
	error: string;

	constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {}

	ngOnInit() {
		this.store.select('userState').subscribe(userState => {
			this.currentUser = userState.currentUser;
			this.loading = userState.loading;
			this.error = userState.errorMessage;
			this.educations = userState.currentUser.educationDetails;
			if (userState.educationDetailsSaved) {
				this.router.navigate(['../professional-info'], {
					relativeTo: this.activatedRoute
				});
			}
		});
	}
	addEducation() {
		this.educations.push({
			startYear: null,
			endYear: null,
			institution: null,
			percentage: null,
			subject: null,
			qualification: null,
			candidateUniqueId: this.currentUser.candidateUniqueId
		});
	}
	removeEducation(index: number) {
		this.educations = this.educations.filter((edu, ind) => ind !== index);
	}
	saveEducation(education: EducationalDetails, index: number) {
		this.educations = this.educations.map((edu, ind) => {
			if (ind === index) {
				return { ...education, candidateUniqueId: this.currentUser.candidateUniqueId };
			} else {
				return edu;
			}
		});
	}
	proceed() {
		this.currentUser = { ...this.currentUser, educationDetails: this.educations };
		this.store.dispatch(
			new SaveUserEducationalInfoStart({ educationList: this.educations, modifiedUser: this.currentUser })
		);
	}
}
