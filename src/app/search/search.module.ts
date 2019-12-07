import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [ProfileListComponent, ProfileDetailsComponent, SearchComponent],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
