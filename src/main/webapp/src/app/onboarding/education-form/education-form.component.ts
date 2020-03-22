import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { EducationalDetails } from 'src/app/store/models/user.model';
import * as moment from 'moment';
import { getNgbDate, convertToDate } from 'src/app/shared/helper';

@Component({
	selector: 'app-education-form',
	templateUrl: './education-form.component.html',
	styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
	@Input() education: EducationalDetails;
	@Output() onSave = new EventEmitter<EducationalDetails>();
	@Output() onCancel = new EventEmitter<void>();
	educationForm: FormGroup;
	submitted = false;
	faCalendarAlt = faCalendarAlt;
	constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {}

	ngOnInit(): void {
		this.educationForm = this.formBuilder.group({
			qualification: new FormControl(this.education.qualification, [Validators.required]),
			institution: new FormControl(this.education.institution, [Validators.required]),
			startDate: new FormControl(getNgbDate(this.education.startDate), [Validators.required]),
			endDate: new FormControl(getNgbDate(this.education.endDate)),
			percentage: new FormControl(this.education.percentage, [Validators.required]),
			subject: new FormControl(this.education.subject)
		});
	}
	get f() {
		return this.educationForm.controls;
	}
	save() {
		this.submitted = true;
		if (this.educationForm.invalid) {
			return false;
		}
		const modifiedEducation = {
			...this.education,
			qualification: this.f.qualification.value,
			subject: this.f.subject.value,
			startDate: convertToDate(this.f.startDate.value),
			endDate: convertToDate(this.f.endDate.value),
			percentage: this.f.percentage.value,
			institution: this.f.institution.value
		};
		this.activeModal.dismiss('data saved');
		this.onSave.emit(modifiedEducation);
	}
	cancel() {
		this.activeModal.dismiss('Cross click');
		this.onCancel.emit();
	}
}
