import * as moment from 'moment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export function getNgbDate(val: Date) {
	const date = moment(val);
	if (date.isValid()) {
		return new NgbDate(date.year(), date.month() + 1, date.date());
	}
	return null;
}

export function convertToDate(date: NgbDate) {
	return new Date(date.year, date.month - 1, date.day);
}
