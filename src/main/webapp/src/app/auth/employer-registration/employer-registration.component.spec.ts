import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerRegistrationComponent } from './employer-registration.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('EmployerRegistrationComponent', () => {
	let component: EmployerRegistrationComponent;
	let fixture: ComponentFixture<EmployerRegistrationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EmployerRegistrationComponent],
			imports: [ReactiveFormsModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployerRegistrationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
