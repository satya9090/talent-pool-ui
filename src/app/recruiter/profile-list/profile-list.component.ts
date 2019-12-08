import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/AppState';
import { ProfileModel } from 'src/app/store/models/profile.model';

@Component({
	selector: 'app-profile-list',
	templateUrl: './profile-list.component.html',
	styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
	profiles: ProfileModel[];
	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.store.select('recruiterState').subscribe(state => {
			this.profiles = state.profiles;
		});
	}
}
