import { AuthState } from './reducers/auth.reducer';
import { JobSeekerState } from './reducers/jobseeker.reducer';
import { RecruiterState } from './reducers/recruiter.reducer';
import { UserState } from './reducers/user.reducer';

export interface AppState {
	authState: AuthState;
	jobSeekerState: JobSeekerState;
	recruiterState: RecruiterState;
	userState: UserState;
}
