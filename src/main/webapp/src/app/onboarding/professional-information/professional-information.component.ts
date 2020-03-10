import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/AppState';
import { User, ProfessionalDetails } from 'src/app/store/models/user.model';
import {
	SaveUserExperienceStart,
	SaveUserProfessionalInfo,
	DeleteUserExperienceStart
} from 'src/app/store/actions/user.actions';

@Component({
	selector: 'app-professional-information',
	templateUrl: './professional-information.component.html',
	styleUrls: ['./professional-information.component.scss']
})
export class ProfessionalInformationComponent implements OnInit {
	loading = false;
	error: string = null;
	currentUser: User;
	experiences: ProfessionalDetails[];
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {}

	ngOnInit() {
		this.store.select('userState').subscribe(userState => {
			this.loading = userState.loading;
			this.error = userState.errorMessage;
			this.currentUser = userState.currentUser;
			this.experiences = userState.currentUser.professionalDetails;
			if (userState.professionalDetailsSaved) {
				this.router.navigate(['../project-info'], {
					relativeTo: this.activatedRoute
				});
			}
		});
	}
	addExperience() {
		this.experiences.push({
			jobTitle: null,
			startDate: null,
			endDate: null,
			company: null,
			description: null
		});
	}
	deleteExperience(index: number) {
		this.experiences = this.experiences.filter((exp, ind) => ind !== index);
	}
	removeExperience(index: number) {
		const selectedExperience = { ...this.experiences[index] };
		this.experiences = this.experiences.filter((exp, ind) => ind !== index);
		const modifiedUser = { ...this.currentUser, professionalDetails: this.experiences };
		this.store.dispatch(new DeleteUserExperienceStart({ experience: selectedExperience, modifiedUser: modifiedUser }));
	}
	saveExperience(exp: ProfessionalDetails, index: number) {
		const experience: ProfessionalDetails = { ...exp, candidateUniqueId: this.currentUser.candidateUniqueId };
		const expArray = this.experiences.map((expDtls, ind) => {
			if (ind === index) {
				return experience;
			}
			return expDtls;
		});
		this.store.dispatch(
			new SaveUserExperienceStart({
				experience: experience,
				modifiedUser: { ...this.currentUser, professionalDetails: expArray }
			})
		);
	}
	proceed() {
		this.store.dispatch(new SaveUserProfessionalInfo());
	}
}
