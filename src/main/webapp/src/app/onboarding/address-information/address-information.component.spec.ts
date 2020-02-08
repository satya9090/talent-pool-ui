import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressInformationComponent } from './address-information.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppStoreModule } from 'src/app/store/AppStore.module';

describe('AddressInformationComponent', () => {
	let component: AddressInformationComponent;
	let fixture: ComponentFixture<AddressInformationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddressInformationComponent],
			imports: [RouterTestingModule, AppStoreModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddressInformationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
