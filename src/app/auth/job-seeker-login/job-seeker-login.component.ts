import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-job-seeker-login',
	templateUrl: './job-seeker-login.component.html',
	styleUrls: ['./job-seeker-login.component.scss']
})
export class JobSeekerLoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	constructor(private formBuilder: FormBuilder, private router: Router) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			userName: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(6)]]
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
		this.router.navigate(['/onboarding/personal-info']);
	}
}
