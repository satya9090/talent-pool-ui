import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ResetPageSaveStatus } from 'src/app/store/actions/user.actions';
import { AppState } from 'src/app/store/AppState';
import { Skill, User, CandidateSkill } from 'src/app/store/models/user.model';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['../onboarding.scss', './skills.component.scss'],
})
export class SkillsComponent implements OnInit {
	skillForm: FormGroup;
	skills: Skill[];
	loading: boolean;
	error: string;
	currentUser: User;
	constructor(
		private formBuilder: FormBuilder,
		private store: Store<AppState>,
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit() {
		this.store.select('userState').subscribe((userState) => {
			this.store.select('commonState').subscribe((commonState) => {
				this.skills = commonState.skills;
				this.loading = userState.loading;
				this.error = userState.errorMessage;
				this.currentUser = userState.currentUser;
				userState.currentUser.skills.forEach((skill) => {
					this.addSkill(skill);
				});
			});
		});
		this.skillForm = this.formBuilder.group({
			skills: new FormArray([]),
		});
	}
	get skillControls() {
		return (this.skillForm.get('skills') as FormArray).controls;
	}
	addSkill(candidateSkill?: CandidateSkill) {
		const newSkill: CandidateSkill = {
			skill: {
				id: -1,
				skills: '',
				metadata: '',
			},
			lastUsedOn: new Date().getFullYear(),
			experienceInYears: 0,
			candidateUniqueId: this.currentUser.candidateUniqueId,
		};
		const cSkill: CandidateSkill = candidateSkill ? candidateSkill : newSkill;
		(this.skillForm.get('skills') as FormArray).push(
			new FormGroup({
				skill: new FormControl(cSkill.skill.skills, [Validators.required]),
				experienceInYears: new FormControl(cSkill.experienceInYears, [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/),
				]),
				lastUsedOn: new FormControl(cSkill.lastUsedOn, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
			})
		);
	}
	removeSkill(index: number) {
		(this.skillForm.get('skills') as FormArray).removeAt(index);
	}
	goBack() {
		this.store.dispatch(new ResetPageSaveStatus('ProjectDetailsInfo'));
		this.router.navigate(['../project-info'], {
			relativeTo: this.activatedRoute,
		});
	}
}
