import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { CoreModule } from '../core/core.module';

@NgModule({
	declarations: [
		ProfileListComponent,
		ProfileDetailsComponent,
		SearchComponent,
		HomeComponent,
		FilterComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		FontAwesomeModule,
		RouterModule.forChild([{ path: '', component: HomeComponent }]),
		CoreModule
	]
})
export class RecruiterModule {}
