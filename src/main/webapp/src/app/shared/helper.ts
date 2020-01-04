import { AuthUser } from '../store/models/auth.model';

export function getStoredUser(): AuthUser {
	const userData: {
		access_token: string;
		refresh_token: string;
		token_type: string;
		role: string[];
		expires_in: string;
	} = JSON.parse(localStorage.getItem('auth'));
	if (!userData) {
		return null;
	}
	return new AuthUser(
		userData.access_token,
		userData.token_type,
		userData.refresh_token,
		new Date(userData.expires_in),
		userData.role
	);
}
