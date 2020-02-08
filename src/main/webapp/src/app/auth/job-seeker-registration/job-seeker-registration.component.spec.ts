import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerRegistrationComponent } from './job-seeker-registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppStoreModule } from 'src/app/store/AppStore.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('JobSeekerRegistrationComponent', () => {
	let component: JobSeekerRegistrationComponent;
	let fixture: ComponentFixture<JobSeekerRegistrationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [JobSeekerRegistrationComponent],
			imports: [ReactiveFormsModule, AppStoreModule, RouterTestingModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JobSeekerRegistrationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
