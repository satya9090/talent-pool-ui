import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerLoginComponent } from './employer-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStoreModule } from 'src/app/store/AppStore.module';

describe('EmployerLoginComponent', () => {
	let component: EmployerLoginComponent;
	let fixture: ComponentFixture<EmployerLoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EmployerLoginComponent],
			imports: [ReactiveFormsModule, RouterTestingModule, AppStoreModule],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployerLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
