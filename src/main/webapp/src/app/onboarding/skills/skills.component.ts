import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html',
	styleUrls: ['../onboarding.scss', './skills.component.scss'],
})
export class SkillsComponent implements OnInit {
	skillForm: FormGroup;
	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.skillForm = this.formBuilder.group({
			skills: new FormArray([]),
		});
		this.addSkill();
	}
	get skillControls() {
		return (<FormArray>this.skillForm.get('skills')).controls;
	}
	addSkill() {
		(<FormArray>this.skillForm.get('skills')).push(
			new FormGroup({
				major: new FormControl('', [Validators.required]),
				minor: new FormControl('', [Validators.required]),
				experienceInYears: new FormControl(0, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
				lastUsedOn: new FormControl(new Date().getFullYear(), [
					Validators.required,
					Validators.pattern(/^[1-9]+[0-9]*$/),
				]),
			})
		);
	}
	removeSkill(index: number) {
		(<FormArray>this.skillForm.get('skills')).removeAt(index);
	}
}
