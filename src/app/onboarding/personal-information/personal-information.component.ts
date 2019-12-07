import { Component, OnInit } from '@angular/core';
import {
	NgForm,
	FormGroup,
	FormBuilder,
	FormControl,
	Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-personal-information',
	templateUrl: './personal-information.component.html',
	styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
	personalDetailsForm: FormGroup;
	submitted = false;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder
	) {}

	ngOnInit() {
		this.personalDetailsForm = this.formBuilder.group({
			firstName: new FormControl('', Validators.required),
			lastName: new FormControl('', Validators.required),
			email: new FormControl('', [Validators.required, Validators.email]),
			phoneNumber: new FormControl('', Validators.required),
			gender: new FormControl('', Validators.required)
		});
	}
	get f() {
		return this.personalDetailsForm.controls;
	}
	proceed() {
		this.submitted = true;
		if (this.personalDetailsForm.invalid) {
			return;
		}
		this.router.navigate(['../address-info'], {
			relativeTo: this.activatedRoute
		});
	}
}
