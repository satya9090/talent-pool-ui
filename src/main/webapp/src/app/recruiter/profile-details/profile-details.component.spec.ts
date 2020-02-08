import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsComponent } from './profile-details.component';
import { AppStoreModule } from 'src/app/store/AppStore.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileDetailsComponent', () => {
	let component: ProfileDetailsComponent;
	let fixture: ComponentFixture<ProfileDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ProfileDetailsComponent],
			imports: [AppStoreModule, RouterTestingModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProfileDetailsComponent);
		component = fixture.componentInstance;
		component.details = {
			candidateId: '',
			firstName: '',
			lastName: '',
			skills: [],
			experience: 2.5,
			profileDescription: '',
			profileImage: '',
			selected: false
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
