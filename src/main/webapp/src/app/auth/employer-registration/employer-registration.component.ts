import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MustMatch } from '../../shared/CustomValidators';

@Component({
	selector: 'app-employer-registration',
	templateUrl: './employer-registration.component.html',
	styleUrls: ['./employer-registration.component.scss'],
})
export class EmployerRegistrationComponent implements OnInit {
	registerForm: FormGroup;
	submitted = false;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.registerForm = this.formBuilder.group(
			{
				firstName: ['', Validators.required],
				lastName: ['', Validators.required],
				phoneNumber: ['', Validators.required],
				email: ['', [Validators.required, Validators.email]],
				password: ['', [Validators.required, Validators.minLength(6)]],
				confirmPassword: ['', Validators.required],
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

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}

		alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
	}
}
