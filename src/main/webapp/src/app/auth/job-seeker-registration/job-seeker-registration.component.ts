import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
} from '@angular/forms';
import { MustMatch } from '../../shared/CustomValidatos';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { AuthRegistrationStart } from 'src/app/store/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
	selector: 'app-job-seeker-registration',
	templateUrl: './job-seeker-registration.component.html',
	styleUrls: ['./job-seeker-registration.component.scss']
})
export class JobSeekerRegistrationComponent implements OnInit {
	registerForm: FormGroup;
	submitted = false;
	error: string = null;
	loading = false;
	constructor(
		private formBuilder: FormBuilder,
		private store: Store<AppState>,
		private router: Router
	) {}

	ngOnInit() {
		this.store.select('authState').subscribe(authState => {
			this.error = authState.errorMessage;
			this.loading = authState.loading;
		});
		this.registerForm = this.formBuilder.group(
			{
				firstName: new FormControl('', [
					Validators.required,
					Validators.minLength(6)
				]),
				lastName: new FormControl('', [
					Validators.required,
					Validators.minLength(6)
				]),
				phoneNumber: new FormControl('', Validators.required),
				email: new FormControl('', [Validators.required, Validators.email]),
				userName: new FormControl('', [
					Validators.required,
					Validators.minLength(6)
				]),
				password: new FormControl('', [
					Validators.required,
					Validators.minLength(6)
				]),
				confirmPassword: new FormControl('', [Validators.required])
			},
			{
				validator: MustMatch('password', 'confirmPassword')
			}
		);
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.registerForm.controls;
	}

	register() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}
		this.store.dispatch(
			new AuthRegistrationStart({
				userType: 'candidate',
				firstName: this.f.firstName.value,
				lastName: this.f.lastName.value,
				emailId: this.f.email.value,
				userName: this.f.userName.value,
				contactNumber: this.f.phoneNumber.value,
				password: this.f.password.value
			})
		);
	}
}
