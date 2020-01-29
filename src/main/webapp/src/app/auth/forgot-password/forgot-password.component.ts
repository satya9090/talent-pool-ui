import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/store/AppState';
import { AuthForgotPasswordStart } from 'src/app/store/actions/auth.actions';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
	forgotPasswordForm: FormGroup;
	submitted = false;
	loading = false;
	constructor(private formBuilder: FormBuilder, private store: Store<AppState>) {}

	ngOnInit() {
		this.store.select('authState').subscribe(authState => {
			this.loading = authState.loading;
		});
		this.forgotPasswordForm = this.formBuilder.group({
			userName: new FormControl('', [Validators.required])
		});
	}

	get f() {
		return this.forgotPasswordForm.controls;
	}

	onSubmit() {
		this.submitted = true;
		if (this.forgotPasswordForm.invalid) {
			return;
		}
		this.store.dispatch(new AuthForgotPasswordStart(this.f.userName.value));
	}
}
