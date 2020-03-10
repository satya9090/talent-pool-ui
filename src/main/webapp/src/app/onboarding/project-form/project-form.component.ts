import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDetails } from 'src/app/store/models/user.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReturnStatement } from '@angular/compiler';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-project-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
	@Input() project: ProjectDetails;
	@Output() onSave = new EventEmitter<ProjectDetails>();
	@Output() onCancel = new EventEmitter<void>();
	submitted = false;
	projectForm: FormGroup;
	constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal) {}

	ngOnInit(): void {
		this.projectForm = this.formBuilder.group({
			projectName: new FormControl(this.project.projectName, [Validators.required]),
			startDate: new FormControl(new Date(this.project.startDate).toISOString().substring(0, 10), [
				Validators.required
			]),
			endDate: new FormControl(new Date(this.project.endDate).toISOString().substring(0, 10), [Validators.required]),
			companyName: new FormControl(this.project.companyName, [Validators.required]),
			role: new FormControl(this.project.role, [Validators.required]),
			roleDescription: new FormControl(this.project.roleDescription, [Validators.required]),
			projectDetails: new FormControl(this.project.projectDetails, [Validators.required]),
			technologyUsed: new FormControl(this.project.technologyUsed.join(','), [Validators.required])
		});
	}
	get f() {
		return this.projectForm.controls;
	}
	save() {
		this.submitted = true;
		if (this.projectForm.invalid) {
			return;
		}
		const modifiedProject = {
			...this.project,
			projectName: this.f.projectName.value,
			startDate: this.f.startDate.value,
			endDate: this.f.endDate.value,
			role: this.f.role.value,
			roleDescription: this.f.roleDescription.value,
			projectDetails: this.f.projectDetails.value,
			companyName: this.f.companyName.value,
			technologyUsed: this.f.technologyUsed.value.split(',').map(t => t.trim())
		};
		this.onSave.emit(modifiedProject);
		this.activeModal.dismiss('data saved');
	}
	cancel() {
		this.activeModal.dismiss('Cross click');
		this.onCancel.emit();
	}
}
