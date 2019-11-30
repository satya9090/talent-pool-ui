import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormControl,
	Validators,
	AbstractControl,
	FormBuilder
} from '@angular/forms';
import { MustMatch } from '../../shared/CustomValidatos';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
	resetPasswordForm: FormGroup;
	submitted = false;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.resetPasswordForm = this.formBuilder.group(
			{
				newPassword: new FormControl('', [
					Validators.required,
					Validators.minLength(6)
				]),
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
		console.log(this.resetPasswordForm);
	}
}
