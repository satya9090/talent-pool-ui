import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { AuthLoginStart } from '../../store/actions/auth.actions';

@Component({
	selector: 'app-job-seeker-login',
	templateUrl: './job-seeker-login.component.html',
	styleUrls: ['./job-seeker-login.component.scss']
})
export class JobSeekerLoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	error: string = null;
	loading = false;
	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private store: Store<AppState>
	) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			userName: new FormControl('', [Validators.required]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6)
			])
		});
		this.store.select('authState').subscribe(authState => {
			this.error = authState.errorMessage;
			this.loading = authState.loading;
			// if (authState.user) {
			// 	this.router.navigate(['/onboarding/personal-info']);
			// }
		});
	}
	get f() {
		return this.loginForm.controls;
	}
	login() {
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}
		this.store.dispatch(
			new AuthLoginStart({
				userName: this.loginForm.get('userName').value,
				password: this.loginForm.get('password').value
			})
		);
	}
}
