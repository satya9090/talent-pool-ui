import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
	constructor(private httpClient: HttpClient) {}

	getUserDetails(): Observable<User> {
		return this.httpClient.get<User>('/TalentPool/api/v1/getUser');
	}
	savePersonalInfo(userDetails: User): Observable<User> {
		return this.httpClient
			.post('/TalentPool/api/v1/saveCandidateProfileDetails', userDetails)
			.pipe(map(resp => userDetails));
	}
}
