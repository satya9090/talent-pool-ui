import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ReadFile } from 'ngx-file-helpers';
import { faSearch, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import { AppState } from 'src/app/store/AppState';
import { User } from 'src/app/store/models/user.model';
import { SaveUserBasicInfoStart } from 'src/app/store/actions/user.actions';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['../onboarding.scss', './about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
	profilePicContent: any;
	resumeFileContent: any;
	faSearch = faSearch;
	fileReadMode = 'dataURL';
	aboutMeForm: FormGroup;
	currentUser: User = null;
	submitted = false;
	faUserGraduate = faUserGraduate;
	constructor(
		private store: Store<AppState>,
		private formBuilder: FormBuilder,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}
	ngOnInit() {
		this.store.select('userState').subscribe((userState) => {
			this.currentUser = userState.currentUser;
			this.profilePicContent = this.currentUser.profilePhotoDownloadUrl;
			this.resumeFileContent = this.currentUser.resumeDownloadUrl;
			this.aboutMeForm = this.formBuilder.group({
				profilePicFile: new FormControl(this.currentUser.profilePhoto, [Validators.required]),
				resumeFile: new FormControl(this.currentUser.resume, [Validators.required]),
				totalYearsOfExperience: new FormControl(this.currentUser.totalYearsOfExperience, [
					Validators.pattern(`^\\d+(\\.\\d{1,2})?$`),
				]),
				annualSalary: new FormControl(this.currentUser.annualSalary, [Validators.pattern(`^\\d+(\\.\\d{1,2})?$`)]),
				aboutMe: new FormControl(this.currentUser.aboutMe),
			});
			if (userState.basicDetailsSaved) {
				this.router.navigate(['../payment'], {
					relativeTo: this.activatedRoute,
				});
			}
		});
	}
	get f() {
		return this.aboutMeForm.controls;
	}

	onProfilePicSelection(file: ReadFile) {
		this.profilePicContent = file.content;
		this.f.profilePicFile.setValue(file.name);
	}

	onResumeSelection(file: ReadFile) {
		this.resumeFileContent = file.content;
		this.f.resumeFile.setValue(file.name);
	}

	save() {
		this.submitted = true;
		if (this.aboutMeForm.invalid) {
			return;
		}
		const modifiedUser: User = {
			...this.currentUser,
			profilePhoto: this.profilePicContent.startsWith('http')
				? new File([], '')
				: new File([this.dataURLtoBlob(this.profilePicContent)], this.f.profilePicFile.value),
			resume: this.resumeFileContent.startsWith('http')
				? new File([], '')
				: new File([this.dataURLtoBlob(this.resumeFileContent)], this.f.resumeFile.value),
			totalYearsOfExperience: this.f.totalYearsOfExperience.value,
			annualSalary: this.f.annualSalary.value,
			aboutMe: this.f.aboutMe.value,
		};
		this.store.dispatch(new SaveUserBasicInfoStart(modifiedUser));
	}

	dataURLtoBlob(dataUrl: string): Blob {
		var arr = dataUrl.split(','),
			mime = arr[0].match(/:(.*?);/)[1],
			bstr = atob(arr[1]),
			n = bstr.length,
			u8arr = new Uint8Array(n);
		while (n--) {
			u8arr[n] = bstr.charCodeAt(n);
		}
		return new Blob([u8arr], { type: mime });
	}
}
