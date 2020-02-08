import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileListComponent } from './profile-list.component';
import { AppStoreModule } from 'src/app/store/AppStore.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileListComponent', () => {
	let component: ProfileListComponent;
	let fixture: ComponentFixture<ProfileListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProfileListComponent],
			imports: [AppStoreModule, RouterTestingModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProfileListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
