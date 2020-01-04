import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-educational-information',
	templateUrl: './educational-information.component.html',
	styleUrls: ['./educational-information.component.scss']
})
export class EducationalInformationComponent implements OnInit {
	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {}

	proceed(educationalDetailsForm: NgForm) {
		this.router.navigate(['../professional-info'], {
			relativeTo: this.activatedRoute
		});
	}
}
