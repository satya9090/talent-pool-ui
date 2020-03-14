import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessionalDetails } from 'src/app/store/models/user.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { getNgbDate, convertToDate } from 'src/app/shared/helper';

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
	faCalendarAlt = faCalendarAlt;
	constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {}

	ngOnInit(): void {
		this.professionalForm = this.formBuilder.group({
			jobTitle: new FormControl(this.exp.jobTitle, [Validators.required]),
			startDate: new FormControl(getNgbDate(this.exp.startDate), [Validators.required]),
			endDate: new FormControl(getNgbDate(this.exp.endDate)),
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
			startDate: convertToDate(this.f.startDate.value),
			endDate: convertToDate(this.f.endDate.value),
			company: this.f.company.value,
			description: this.f.description.value
		};
		this.activeModal.dismiss('data saved');
		this.onSave.emit(experience);
	}
	cancel() {
		this.activeModal.dismiss('Cross click');
		this.onCancel.emit();
	}
}
