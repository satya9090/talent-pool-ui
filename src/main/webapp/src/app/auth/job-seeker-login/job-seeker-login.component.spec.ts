import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerLoginComponent } from './job-seeker-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStoreModule } from 'src/app/store/AppStore.module';

describe('JobSeekerLoginComponent', () => {
	let component: JobSeekerLoginComponent;
	let fixture: ComponentFixture<JobSeekerLoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [JobSeekerLoginComponent],
			imports: [ReactiveFormsModule, RouterTestingModule, AppStoreModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JobSeekerLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
