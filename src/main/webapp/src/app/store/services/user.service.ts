import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Address, EducationalDetails } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
	constructor(private httpClient: HttpClient) {}

	getUserDetails(): Observable<User> {
		return this.httpClient.get<User>('/TalentPool/api/v1/getUser');
	}
	savePersonalInfo(userDetails: User): Observable<User> {
		return this.httpClient.post<User>('/TalentPool/api/v1/saveCandidateProfileDetails', userDetails);
	}
	saveAddressInfo(addressList: Address[]) {
		return this.httpClient.post('/TalentPool/api/v1/saveCandidateAddressDetails', addressList);
	}
	saveEducationalInfo(educationList: EducationalDetails[]) {
		return this.httpClient.post('/TalentPool/api/v1/saveCandidateEducationDetails', educationList);
	}
}
