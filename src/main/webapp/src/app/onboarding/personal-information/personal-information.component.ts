import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { SaveUserPersonalInfoStart } from 'src/app/store/actions/user.actions';
import { User } from 'src/app/store/models/user.model';

@Component({
	selector: 'app-personal-information',
	templateUrl: './personal-information.component.html',
	styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
	personalDetailsForm: FormGroup;
	submitted = false;
	currentUser: User = null;
	loading = false;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,
		private store: Store<AppState>
	) {}

	ngOnInit() {
		this.store.select('userState').subscribe(userState => {
			this.currentUser = userState.currentUser;
			this.loading = userState.loading;
			if (this.currentUser) {
				this.personalDetailsForm = this.formBuilder.group({
					firstName: new FormControl(this.currentUser.firstName, Validators.required),
					lastName: new FormControl(this.currentUser.lastName, Validators.required),
					email: new FormControl(this.currentUser.emailId, [Validators.required, Validators.email]),
					alternateEmail: new FormControl(this.currentUser.alternateEmailId, [Validators.email]),
					phoneNumber: new FormControl(this.currentUser.contactNumber, Validators.required),
					gender: new FormControl(this.currentUser.gender, Validators.required),
					experience: new FormControl(this.currentUser.experience, [
						Validators.required,
						Validators.pattern(`^\\d+(\\.\\d{1,2})?$`)
					])
				});
			}
		});
	}
	get f() {
		return this.personalDetailsForm.controls;
	}
	proceed() {
		this.submitted = true;
		if (this.personalDetailsForm.invalid) {
			return;
		}
		this.store.dispatch(
			new SaveUserPersonalInfoStart({
				...this.currentUser,
				firstName: this.f.firstName.value,
				lastName: this.f.lastName.value,
				emailId: this.f.email.value,
				alternateEmailId: this.f.alternateEmail.value,
				contactNumber: this.f.phoneNumber.value,
				gender: this.f.gender.value,
				experience: this.f.experience.value
			})
		);
		this.router.navigate(['../address-info'], {
			relativeTo: this.activatedRoute
		});
	}
}
