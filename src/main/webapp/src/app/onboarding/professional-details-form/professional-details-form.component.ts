import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessionalDetails } from 'src/app/store/models/user.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-professional-details-form',
	templateUrl: './professional-details-form.component.html',
	styleUrls: ['./professional-details-form.component.scss']
})
export class ProfessionalDetailsFormComponent implements OnInit {
	submitted = false;
	@Input() exp: ProfessionalDetails;
	@Output() onSave = new EventEmitter<ProfessionalDetails>();
	@Output() onCancel = new EventEmitter<void>();
	professionalForm: FormGroup;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.professionalForm = this.formBuilder.group({
			jobTitle: new FormControl(this.exp.jobTitle, [Validators.required]),
			startDate: new FormControl(this.exp.startDate, [Validators.required]),
			endDate: new FormControl(this.exp.endDate, [Validators.required]),
			description: new FormControl(this.exp.description, [Validators.required]),
			company: new FormControl(this.exp.company, [Validators.required])
		});
	}
	get f() {
		return this.professionalForm.controls;
	}
	save() {
		this.submitted = true;
		if (this.professionalForm.invalid) {
			return;
		}
		const experience: ProfessionalDetails = {
			...this.exp,
			jobTitle: this.f.jobTitle.value,
			startDate: this.f.startDate.value,
			endDate: this.f.endDate.value,
			company: this.f.company.value,
			description: this.f.description.value
		};
		this.onSave.emit(experience);
	}
	cancel() {
		this.onCancel.emit();
	}
}
