import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { GetUserDetailsStart } from 'src/app/store/actions/user.actions';
import { take, tap } from 'rxjs/operators';

@Component({
	selector: 'app-profile-information',
	templateUrl: './profile-information.component.html',
	styleUrls: ['./profile-information.component.scss']
})
export class ProfileInformationComponent implements OnInit {
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store
			.select('userState')
			.pipe(
				take(1),
				tap(userState => {
					if (!userState.currentUser) {
						this.store.dispatch(new GetUserDetailsStart());
					}
				})
			)
			.subscribe(userState => {
				console.log(userState);
			});
	}
}
