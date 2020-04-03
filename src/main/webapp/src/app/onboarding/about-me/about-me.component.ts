import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReadFile } from 'ngx-file-helpers';
import { faSearch, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { AppState } from 'src/app/store/AppState';
import { User } from 'src/app/store/models/user.model';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
	profilePic = '';
	faSearch = faSearch;
	resumeReadMode = 'arrayBuffer';
	aboutMeForm: FormGroup;
	currentUser: User = null;
	submitted = false;
	faUserGraduate = faUserGraduate;
	constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {}
	ngOnInit() {
		this.store.select('userState').subscribe(userState => {
			this.currentUser = userState.currentUser;
			this.aboutMeForm = this.formBuilder.group({
				totalExperience: new FormControl(this.currentUser.totalExperience, [
					Validators.pattern(`^\\d+(\\.\\d{1,2})?$`)
				]),
				currentSalary: new FormControl(this.currentUser.currentSalary, [Validators.pattern(`^\\d+(\\.\\d{1,2})?$`)])
			});
		});
	}
	get f() {
		return this.aboutMeForm.controls;
	}
	onProfilePicSelection(file: ReadFile) {
		this.profilePic = file.content;
	}

	onResumeSelection(file: ReadFile) {
		console.log(file);
	}

	save() {
		this.submitted = true;
		if (this.aboutMeForm.invalid) {
			return;
		}
	}
}
