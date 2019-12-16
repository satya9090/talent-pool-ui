import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { ProfileModel } from 'src/app/store/models/profile.model';
import { AppState } from 'src/app/store/AppState';
import { ToggleProfileSelection } from 'src/app/store/actions/recruiter.actions';

@Component({
	selector: 'app-profile-details',
	templateUrl: './profile-details.component.html',
	styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
	@Input() details: ProfileModel;
	faDownload = faDownload;
	constructor(private store: Store<AppState>) {}

	ngOnInit() {}
	toggleSelection() {
		this.store.dispatch(new ToggleProfileSelection(this.details.candidateId));
	}
}
