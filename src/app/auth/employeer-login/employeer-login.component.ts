import { Component, OnInit } from '@angular/core';
import {
	NgForm,
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';

@Component({
	selector: 'app-employeer-login',
	templateUrl: './employeer-login.component.html',
	styleUrls: ['./employeer-login.component.scss']
})
export class EmployeerLoginComponent implements OnInit {
	loginForm: FormGroup;
	submitted = false;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			userName: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(6)
			])
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
		console.log(
			this.loginForm.value['email'],
			this.loginForm.value['password']
		);
	}
}
