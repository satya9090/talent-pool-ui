import { AuthState } from './reducers/auth.reducer';
import { JobSeekerState } from './reducers/jobseeker.reducer';
import { RecruiterState } from './reducers/recruiter.reducer';

export interface AppState {
	authState: AuthState;
	jobSeekerState: JobSeekerState;
	recruiterState: RecruiterState;
}
