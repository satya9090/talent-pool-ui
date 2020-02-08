import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerRegistartionComponent } from './employeer-registartion.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('EmployeerRegistartionComponent', () => {
	let component: EmployeerRegistartionComponent;
	let fixture: ComponentFixture<EmployeerRegistartionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EmployeerRegistartionComponent],
			imports: [ReactiveFormsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeerRegistartionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
