import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressComponent } from './address.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AddressComponent', () => {
	let component: AddressComponent;
	let fixture: ComponentFixture<AddressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddressComponent],
			imports: [ReactiveFormsModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddressComponent);
		component = fixture.componentInstance;
		component.title = 'Testing Address';
		component.address = {
			address: '',
			country: '',
			state: '',
			city: '',
			pincode: 0,
			type: 'permanent'
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
