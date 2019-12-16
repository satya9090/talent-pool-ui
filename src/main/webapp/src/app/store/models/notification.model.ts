import { Company } from './user.model';

export interface NotificationModel {
	id: string;
	date: Date;
	message: string;
	from: Company;
}
