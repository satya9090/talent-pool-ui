import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EducationalDetails } from 'src/app/store/models/user.model';

@Component({
	selector: 'app-education-details',
	templateUrl: './education-details.component.html',
	styleUrls: ['./education-details.component.scss']
})
export class EducationDetailsComponent implements OnInit {
	@Input() education: EducationalDetails;
	@Output() onDelete = new EventEmitter<number>();
	@Output() onSave = new EventEmitter<EducationalDetails>();
	editMode = false;
	constructor() {}

	ngOnInit(): void {}
	delete() {
		this.onDelete.emit(0);
	}
	edit() {
		this.editMode = true;
	}
	save(education: EducationalDetails) {
		this.onSave.emit(education);
	}
	cancelEdit() {
		this.editMode = false;
	}
}
