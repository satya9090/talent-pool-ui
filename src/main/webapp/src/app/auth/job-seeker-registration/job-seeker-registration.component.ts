import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { MustMatch } from '../../shared/CustomValidators';
import { AppState } from 'src/app/store/AppState';
import { AuthRegistrationStart } from 'src/app/store/actions/auth.actions';

@Component({
	selector: 'app-job-seeker-registration',
	templateUrl: './job-seeker-registration.component.html',
	styleUrls: ['./job-seeker-registration.component.scss'],
})
export class JobSeekerRegistrationComponent implements OnInit {
	registerForm: FormGroup;
	submitted = false;
	error: string = null;
	loading = false;
	registrationSuccess = false;
	constructor(private formBuilder: FormBuilder, private store: Store<AppState>, private router: Router) {}

	ngOnInit() {
		this.store.select('authState').subscribe((authState) => {
			this.error = authState.errorMessage;
			this.loading = authState.loading;
			this.registrationSuccess = authState.registrationDone;
		});
		this.registerForm = this.formBuilder.group(
			{
				firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
				middleName: new FormControl('', [Validators.minLength(4)]),
				lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
				phoneNumber: new FormControl('', Validators.required),
				email: new FormControl('', [Validators.required, Validators.email]),
				userName: new FormControl('', [Validators.required, Validators.minLength(6)]),
				password: new FormControl('', [Validators.required, Validators.minLength(6)]),
				confirmPassword: new FormControl('', [Validators.required]),
			},
			{
				validator: MustMatch('password', 'confirmPassword'),
			}
		);
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.registerForm.controls;
	}

	register() {
		this.submitted = true;
		if (this.registerForm.invalid) {
			return;
		}
		this.store.dispatch(
			new AuthRegistrationStart({
				role: 'candidate',
				firstName: this.f.firstName.value,
				middleName: this.f.middleName.value,
				lastName: this.f.lastName.value,
				emailId: this.f.email.value,
				userName: this.f.userName.value,
				contactNumber: this.f.phoneNumber.value,
				password: this.f.password.value,
			})
		);
	}
}
