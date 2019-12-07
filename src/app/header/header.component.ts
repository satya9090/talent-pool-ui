import { Component, OnInit } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	faBell = faBell;
	faUser = faUser;
	constructor() {}

	ngOnInit() {}
}
