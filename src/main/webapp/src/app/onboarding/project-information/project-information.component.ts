import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { ProjectDetails, User } from 'src/app/store/models/user.model';
import { AppState } from 'src/app/store/AppState';
import { SaveUserProjectStart, SaveUserProjectInfo, DeleteUserProjectStart } from 'src/app/store/actions/user.actions';

@Component({
	selector: 'app-project-information',
	templateUrl: './project-information.component.html',
	styleUrls: ['../onboarding.scss', './project-information.component.scss'],
})
export class ProjectInformationComponent implements OnInit {
	submitted = false;
	loading = false;
	error: string = null;
	currentUser: User;
	projects: ProjectDetails[];
	constructor(private router: Router, private activatedRoute: ActivatedRoute, private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store.select('userState').subscribe((userState) => {
			this.loading = userState.loading;
			this.error = userState.errorMessage;
			this.currentUser = userState.currentUser;
			this.projects = [...userState.currentUser.projectDetails];
			if (userState.projectDetailsSaved) {
				this.router.navigate(['../skills'], {
					relativeTo: this.activatedRoute,
				});
			}
		});
	}
	save(project: ProjectDetails, index: number) {
		const modifiedProjectList = this.projects.map((prj, ind) => {
			if (ind === index) return project;
			return prj;
		});
		const modifiedUser = { ...this.currentUser, projectDetails: modifiedProjectList };
		this.store.dispatch(new SaveUserProjectStart({ project: project, modifiedUser: modifiedUser }));
	}
	add() {
		this.projects.push({
			companyName: null,
			candidateUniqueId: this.currentUser.candidateUniqueId,
			endDate: null,
			projectDetails: null,
			projectName: null,
			role: null,
			roleDescription: null,
			startDate: null,
			technologyUsed: [],
		});
	}
	delete(index: number) {
		this.projects = this.projects.filter((prj, ind) => ind !== index);
	}
	remove(index: number) {
		const selectedProject = { ...this.projects[index] };
		this.projects = this.projects.filter((prj, ind) => ind !== index);
		const modifiedUser = { ...this.currentUser, projectDetails: this.projects };
		this.store.dispatch(new DeleteUserProjectStart({ project: selectedProject, modifiedUser: modifiedUser }));
	}
	proceed() {
		this.store.dispatch(new SaveUserProjectInfo());
	}
}
