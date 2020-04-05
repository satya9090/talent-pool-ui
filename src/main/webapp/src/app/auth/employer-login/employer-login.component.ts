import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/AppState';
import { AuthLoginStart } from 'src/app/store/actions/auth.actions';

@Component({
	selector: 'app-employer-login',
	templateUrl: './employer-login.component.html',
	styleUrls: ['./employer-login.component.scss'],
})
export class EmployerLoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	error: string = null;
	loading = false;
	constructor(private formBuilder: FormBuilder, private router: Router, private store: Store<AppState>) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			userName: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
		});
		this.store.select('authState').subscribe((authState) => {
			this.error = authState.errorMessage;
			this.loading = authState.loading;
			if (authState.user) {
				this.router.navigate(['/']);
			}
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
				password: this.loginForm.get('password').value,
			})
		);
	}
}
