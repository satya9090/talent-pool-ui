import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User, Address, EducationalDetails, ProfessionalDetails, ProjectDetails } from '../models/user.model';
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
	saveEducation(education: EducationalDetails) {
		return this.httpClient.post('/TalentPool/api/v1/saveCandidateEducationDetails', education);
	}
	deleteEducation(education: EducationalDetails) {
		return this.httpClient.delete('/TalentPool/api/v1/DeleteEducationDetails/' + education.educationId);
	}
	saveProfessionalInfo(experience: ProfessionalDetails) {
		return this.httpClient.post('/TalentPool/api/v1/saveProfessionalDetails', experience);
	}
	deleteProfessionalInfo(experience: ProfessionalDetails) {
		return this.httpClient.delete('/TalentPool/api/v1/DeleteProfessionalDetails/' + experience.professionalDetailsId);
	}
	saveProject(project: ProjectDetails) {
		return this.httpClient.post('/TalentPool/api/v1/saveCandidateProjectDetails', project);
	}
	deleteProject(project: ProjectDetails) {
		return this.httpClient.delete('/TalentPool/api/v1/DeleteProjectDetails/' + project.projectId);
	}
}
