import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/AppState';
import { AuthAutoLogin } from './store/actions/auth.actions';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'job-portal';
	constructor(private store: Store<AppState>) {}
	ngOnInit() {
		this.store.dispatch(new AuthAutoLogin());
	}
}
