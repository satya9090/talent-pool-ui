import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalInformationComponent } from './personal-information.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppStoreModule } from 'src/app/store/AppStore.module';

describe('PersonalInformationComponent', () => {
	let component: PersonalInformationComponent;
	let fixture: ComponentFixture<PersonalInformationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PersonalInformationComponent],
			imports: [RouterTestingModule, ReactiveFormsModule, AppStoreModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PersonalInformationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
