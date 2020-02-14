import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EducationalDetails } from 'src/app/store/models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { faCheckCircle, faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-education-form',
	templateUrl: './education-form.component.html',
	styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {
	@Input() education: EducationalDetails;
	@Output() onAddition = new EventEmitter<void>();
	@Output() onRemoval = new EventEmitter<number>();
	@Output() onSave = new EventEmitter<EducationalDetails>();
	educationForm: FormGroup;
	submitted = false;
	faCheckCircle = faCheckCircle;
	faPlusCircle = faPlusCircle;
	faTimesCircle = faTimesCircle;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.educationForm = this.formBuilder.group({
			qualification: new FormControl(this.education.qualification, [Validators.required]),
			institution: new FormControl(this.education.institution, [Validators.required]),
			startYear: new FormControl(this.education.startYear, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
			endYear: new FormControl(this.education.endYear, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
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
		this.education = {
			qualification: this.f.qualification.value,
			subject: this.f.subject.value,
			startYear: this.f.startYear.value,
			endYear: this.f.endYear.value,
			percentage: this.f.percentage.value,
			institution: this.f.institution.value
		};
		this.onSave.emit(this.education);
	}
	add() {
		this.onAddition.emit();
	}
	remove() {
		this.onRemoval.emit(0);
	}
}
