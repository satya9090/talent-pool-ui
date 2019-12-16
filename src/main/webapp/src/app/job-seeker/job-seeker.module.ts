import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
const jobSeekerRoute: Route[] = [{ path: '', component: HomeComponent }];

@NgModule({
	declarations: [
		NotificationListComponent,
		NotificationComponent,
		ProfileComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		FontAwesomeModule,
		RouterModule.forChild(jobSeekerRoute)
	]
})
export class JobSeekerModule {}
