import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessionalDetails } from 'src/app/store/models/user.model';
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfessionalDetailsFormComponent } from '../professional-details-form/professional-details-form.component';

@Component({
	selector: 'app-professional-details',
	templateUrl: './professional-details.component.html',
	styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {
	@Input() exp: ProfessionalDetails;
	@Output() onRemoval = new EventEmitter<number>();
	@Output() onDelete = new EventEmitter<number>();
	@Output() onSave = new EventEmitter<ProfessionalDetails>();
	faTrash = faTrash;
	faPencilAlt = faPencilAlt;
	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {
		if (!this.exp.professionalDetailsId) {
			this.edit();
		}
	}

	edit() {
		const modalRef = this.modalService.open(ProfessionalDetailsFormComponent, { size: 'xl', centered: true });
		modalRef.componentInstance.exp = this.exp;
		modalRef.componentInstance.onSave.subscribe($event => {
			this.save($event);
		});
		modalRef.componentInstance.onCancel.subscribe($event => {
			this.cancelEdit();
		});
	}
	save(experience: ProfessionalDetails) {
		this.onSave.emit(experience);
	}
	delete() {
		this.onRemoval.emit(0);
	}
	cancelEdit() {
		if (!this.exp.professionalDetailsId) {
			this.onDelete.emit(0);
		}
	}
}
