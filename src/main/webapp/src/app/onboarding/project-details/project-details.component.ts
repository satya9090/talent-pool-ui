import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectDetails } from 'src/app/store/models/user.model';

@Component({
	selector: 'app-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
	@Input() project: ProjectDetails;
	@Output() onSave = new EventEmitter<ProjectDetails>();
	@Output() onDelete = new EventEmitter<number>();
	editMode = false;
	constructor() {}

	ngOnInit(): void {}
	edit() {
		this.editMode = true;
	}
	save(projectDetails: ProjectDetails) {
		this.onSave.emit(projectDetails);
		this.editMode = false;
	}
	delete() {
		this.onDelete.emit(0);
	}
	cancelEdit() {
		this.editMode = false;
	}
}
