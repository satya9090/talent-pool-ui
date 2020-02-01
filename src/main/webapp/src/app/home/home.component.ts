import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { GetUserDetailsStart } from '../store/actions/user.actions';
import { Router } from '@angular/router';
import { User } from '../store/models/user.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	loading = false;
	currentUser: User = null;
	errorMessage: string = null;
	constructor(private store: Store<AppState>, private router: Router) {}

	ngOnInit() {
		this.store.select('userState').subscribe(userState => {
			this.loading = userState.loading;
			this.currentUser = userState.currentUser;
			this.errorMessage = userState.errorMessage;
			if (this.currentUser && this.currentUser.isProfileComplete === 'N') {
				this.router.navigate(['/onboarding']);
			}
		});
		this.store.dispatch(new GetUserDetailsStart());
	}
}
