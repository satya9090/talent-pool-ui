import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { GetUserDetailsStart } from '../store/actions/user.actions';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	loading = false;
	currentUser = null;
	errorMessage: string = null;
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store.select('userState').subscribe(userState => {
			this.loading = userState.loading;
			this.currentUser = userState.currentUser;
			this.errorMessage = userState.errorMessage;
		});
		this.store.dispatch(new GetUserDetailsStart());
	}
}
