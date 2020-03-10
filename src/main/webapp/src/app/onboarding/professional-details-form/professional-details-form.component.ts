import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessionalDetails } from 'src/app/store/models/user.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
	constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {}

	ngOnInit(): void {
		this.professionalForm = this.formBuilder.group({
			jobTitle: new FormControl(this.exp.jobTitle, [Validators.required]),
			startDate: new FormControl(new Date(this.exp.startDate).toISOString().substring(0, 10), [Validators.required]),
			endDate: new FormControl(new Date(this.exp.endDate).toISOString().substring(0, 10), [Validators.required]),
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
		this.activeModal.dismiss('data saved');
	}
	cancel() {
		this.activeModal.dismiss('Cross click');
		this.onCancel.emit();
	}
}
