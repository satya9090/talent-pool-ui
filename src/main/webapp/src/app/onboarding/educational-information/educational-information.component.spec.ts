import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalInformationComponent } from './educational-information.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('EducationalInformationComponent', () => {
	let component: EducationalInformationComponent;
	let fixture: ComponentFixture<EducationalInformationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EducationalInformationComponent],
			imports: [RouterTestingModule, FormsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EducationalInformationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
