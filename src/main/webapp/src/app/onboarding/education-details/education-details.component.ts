import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EducationalDetails } from 'src/app/store/models/user.model';

import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationFormComponent } from '../education-form/education-form.component';

@Component({
	selector: 'app-education-details',
	templateUrl: './education-details.component.html',
	styleUrls: ['./education-details.component.scss']
})
export class EducationDetailsComponent implements OnInit {
	@Input() education: EducationalDetails;
	@Output() onRemoval = new EventEmitter<number>();
	@Output() onDelete = new EventEmitter<number>();
	@Output() onSave = new EventEmitter<EducationalDetails>();
	faPencilAlt = faPencilAlt;
	faTrash = faTrash;
	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {
		if (!this.education.educationId) {
			this.edit();
		}
	}
	delete() {
		this.onRemoval.emit(0);
	}
	edit() {
		const modalRef = this.modalService.open(EducationFormComponent, { size: 'xl', centered: true });
		modalRef.componentInstance.education = this.education;
		modalRef.componentInstance.onSave.subscribe($event => {
			this.save($event);
		});
		modalRef.componentInstance.onCancel.subscribe($event => {
			this.cancelEdit();
		});
	}
	save(education: EducationalDetails) {
		this.onSave.emit(education);
	}
	cancelEdit() {
		if (!this.education.educationId) {
			this.onDelete.emit(0);
		}
	}
}
