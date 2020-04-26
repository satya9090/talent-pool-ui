import { AuthState } from './reducers/auth.reducer';
import { JobSeekerState } from './reducers/jobseeker.reducer';
import { RecruiterState } from './reducers/recruiter.reducer';
import { UserState } from './reducers/user.reducer';
import { CommonState } from './reducers/common.reducer';

export interface AppState {
	authState: AuthState;
	jobSeekerState: JobSeekerState;
	recruiterState: RecruiterState;
	userState: UserState;
	commonState: CommonState;
}
