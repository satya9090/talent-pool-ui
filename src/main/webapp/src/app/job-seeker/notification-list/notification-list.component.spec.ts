import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationListComponent } from './notification-list.component';
import { AppStoreModule } from 'src/app/store/AppStore.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotificationListComponent', () => {
	let component: NotificationListComponent;
	let fixture: ComponentFixture<NotificationListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NotificationListComponent],
			imports: [AppStoreModule, RouterTestingModule]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
