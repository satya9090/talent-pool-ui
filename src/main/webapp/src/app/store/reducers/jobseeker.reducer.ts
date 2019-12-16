import { NotificationModel } from '../models/notification.model';

export interface JobSeekerState {
	notifications: NotificationModel[];
}
const initialState: JobSeekerState = {
	notifications: [
		{
			id: '1',
			from: {
				id: 'abcd',
				name: 'Infosys',
				profileImage:
					'https://media.licdn.com/dms/image/C4E0BAQGcC5nkmHu2cg/company-logo_200_200/0?e=1583971200&v=beta&t=yQDs_iTMTLN25yMsTVl18jweONpUqd5wewy1TNoLTgQ'
			},
			message:
				'We have downloaed your profile. We will try to call you shortly',
			date: new Date()
		},
		{
			id: '2',
			from: {
				id: 'abcd',
				name: 'TCS',
				profileImage:
					'https://hysea.in/hysea.in/wp-content/uploads/2019/01/TCS-Logo.jpg'
			},
			message:
				'We have downloaed your profile. We will try to call you shortly',
			date: new Date()
		}
	]
};

export function JobSeekerReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
