import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EducationalDetails } from 'src/app/store/models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.educationForm = this.formBuilder.group({
			qualification: new FormControl(this.education.qualification, [Validators.required]),
			institution: new FormControl(this.education.institution, [Validators.required]),
			startDate: new FormControl(this.education.startDate, [Validators.required]),
			endDate: new FormControl(this.education.endDate, [Validators.required]),
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
			startDate: this.f.startDate.value,
			endDate: this.f.endDate.value,
			percentage: this.f.percentage.value,
			institution: this.f.institution.value
		};
		this.onSave.emit(modifiedEducation);
	}
	cancel() {
		this.onCancel.emit();
	}
}
