import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-forgot-password',
	templateUrl: './forgot-password.component.html',
	styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
	forgotPasswordForm: FormGroup;
	submitted = false;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.forgotPasswordForm = this.formBuilder.group({
			userName: new FormControl('', [Validators.required, Validators.email])
		});
	}

	get f() {
		return this.forgotPasswordForm.controls;
	}
	onSubmit() {
		this.submitted = true;
		if (this.forgotPasswordForm.invalid) {
			return true;
		}
		console.log(this.forgotPasswordForm);
	}
}
