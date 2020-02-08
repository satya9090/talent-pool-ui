import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeerLoginComponent } from './employeer-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStoreModule } from 'src/app/store/AppStore.module';

describe('EmployeerLoginComponent', () => {
	let component: EmployeerLoginComponent;
	let fixture: ComponentFixture<EmployeerLoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EmployeerLoginComponent],
			imports: [ReactiveFormsModule, RouterTestingModule, AppStoreModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EmployeerLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
