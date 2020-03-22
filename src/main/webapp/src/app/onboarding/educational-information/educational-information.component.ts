import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { User, EducationalDetails } from 'src/app/store/models/user.model';
import { AppState } from 'src/app/store/AppState';
import {
	SaveUserEducationalInfo,
	SaveUserEducationStart,
	DeleteUserEducationStart
} from 'src/app/store/actions/user.actions';

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
			this.educations = [...userState.currentUser.educationDetails];
			if (userState.educationDetailsSaved) {
				this.router.navigate(['../professional-info'], {
					relativeTo: this.activatedRoute
				});
			}
		});
	}
	addEducation() {
		this.educations.push({
			startDate: null,
			endDate: null,
			institution: null,
			percentage: null,
			subject: null,
			qualification: null,
			candidateUniqueId: this.currentUser.candidateUniqueId
		});
	}
	deleteEducation(index: number) {
		this.educations = this.educations.filter((edu, ind) => ind !== index);
	}
	removeEducation(index: number) {
		const selectedEducation = { ...this.educations[index] };
		this.educations = this.educations.filter((edu, ind) => ind !== index);
		const modifiedUser = { ...this.currentUser, educationDetails: this.educations };
		this.store.dispatch(new DeleteUserEducationStart({ education: selectedEducation, modifiedUser: modifiedUser }));
	}
	saveEducation(education: EducationalDetails, index: number) {
		this.educations = this.educations.map((edu, ind) => {
			if (ind === index) {
				return { ...education, candidateUniqueId: this.currentUser.candidateUniqueId };
			} else {
				return edu;
			}
		});
		this.store.dispatch(
			new SaveUserEducationStart({
				education: education,
				modifiedUser: { ...this.currentUser, educationDetails: this.educations }
			})
		);
	}
	proceed() {
		this.currentUser = { ...this.currentUser, educationDetails: this.educations };
		this.store.dispatch(new SaveUserEducationalInfo());
	}
}
