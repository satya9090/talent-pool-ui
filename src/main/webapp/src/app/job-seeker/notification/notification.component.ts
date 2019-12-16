import { Component, OnInit, Input } from '@angular/core';
import { NotificationModel } from '../../store/models/notification.model';

@Component({
	selector: 'app-notification',
	templateUrl: './notification.component.html',
	styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
	@Input() details: NotificationModel;
	constructor() {}

	ngOnInit() {
		console.log(this.details);
	}
}
