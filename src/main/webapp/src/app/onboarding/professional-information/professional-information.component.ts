import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-professional-information',
	templateUrl: './professional-information.component.html',
	styleUrls: ['./professional-information.component.scss']
})
export class ProfessionalInformationComponent implements OnInit {
	constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

	ngOnInit() {}

	proceed(professionalDetailsForm: NgForm) {
		this.router.navigate(['../about-me'], {
			relativeTo: this.activatedRoute
		});
	}
}
