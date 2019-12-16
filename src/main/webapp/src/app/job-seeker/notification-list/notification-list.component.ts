import { Component, OnInit } from '@angular/core';
import { NotificationModel } from '../../store/models/notification.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-notification-list',
	templateUrl: './notification-list.component.html',
	styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
	notifications: NotificationModel[];
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store.select('jobSeekerState').subscribe(state => {
			this.notifications = state.notifications;
		});
	}
}
