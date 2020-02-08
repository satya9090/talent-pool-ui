import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MustMatch } from '../../shared/CustomValidatos';
import { AppState } from 'src/app/store/AppState';
import { AuthResetPasswordStart } from 'src/app/store/actions/auth.actions';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
	resetPasswordForm: FormGroup;
	submitted = false;
	resetPasswordToken = '';
	loading = false;
	errorMessage = null;
	constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private store: Store<AppState>) {}

	ngOnInit() {
		this.route.queryParams.subscribe(queryParmas => {
			this.resetPasswordToken = queryParmas.token;
		});
		this.store.select('authState').subscribe(authState => {
			this.loading = authState.loading;
			this.errorMessage = authState.errorMessage;
		});
		this.resetPasswordForm = this.formBuilder.group(
			{
				newPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
				confirmPassword: new FormControl('', [Validators.required])
			},
			{
				validator: MustMatch('newPassword', 'confirmPassword')
			}
		);
	}

	get f() {
		return this.resetPasswordForm.controls;
	}

	changePassword() {
		this.submitted = true;
		if (this.resetPasswordForm.invalid) {
			return;
		}
		const payload = {
			resetPasswordToken: this.resetPasswordToken,
			password: this.f.newPassword.value
		};
		this.store.dispatch(new AuthResetPasswordStart(payload));
	}
}
