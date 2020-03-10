import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDetails } from 'src/app/store/models/user.model';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectFormComponent } from '../project-form/project-form.component';
@Component({
	selector: 'app-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
	@Input() project: ProjectDetails;
	@Output() onSave = new EventEmitter<ProjectDetails>();
	@Output() onRemoval = new EventEmitter<number>();
	@Output() onDelete = new EventEmitter<number>();
	faPencilAlt = faPencilAlt;
	faTrash = faTrash;
	constructor(private modalService: NgbModal) {}

	ngOnInit(): void {
		if (!this.project.projectId) {
			this.edit();
		}
	}
	edit() {
		const modalRef = this.modalService.open(ProjectFormComponent, { size: 'xl', centered: true });
		modalRef.componentInstance.project = this.project;
		modalRef.componentInstance.onSave.subscribe($event => {
			this.save($event);
		});
		modalRef.componentInstance.onCancel.subscribe($event => {
			this.cancelEdit();
		});
	}
	save(projectDetails: ProjectDetails) {
		this.onSave.emit(projectDetails);
	}
	delete() {
		this.onRemoval.emit(0);
	}
	cancelEdit() {
		if (!this.project.projectId) {
			this.onDelete.emit(0);
		}
	}
}
