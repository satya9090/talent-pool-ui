import { Component, OnInit } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from '../store/AppState';
import { AuthLogout } from '../store/actions/auth.actions';
import { User } from '../store/models/user.model';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	faBell = faBell;
	faUser = faUser;
	user: User = null;
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store.select('userState').subscribe(userState => {
			this.user = userState.currentUser;
		});
	}

	logout() {
		this.store.dispatch(new AuthLogout());
	}
}
