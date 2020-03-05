import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfessionalDetails } from 'src/app/store/models/user.model';

@Component({
	selector: 'app-professional-details',
	templateUrl: './professional-details.component.html',
	styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {
	@Input() exp: ProfessionalDetails;
	@Output() onDelete = new EventEmitter<number>();
	@Output() onSave = new EventEmitter<ProfessionalDetails>();
	editMode = false;
	constructor() {}

	ngOnInit(): void {}

	edit() {
		this.editMode = true;
	}
	save(experience: ProfessionalDetails) {
		this.onSave.emit(experience);
		this.editMode = false;
	}
	delete() {
		this.onDelete.emit(0);
	}
	cancelEdit() {
		this.editMode = false;
	}
}
