export interface AuthResponse {
	access_token: string;
	token_type: string;
	refresh_token: string;
	expires_in: number;
	scope: string;
}

export class AuthUser {
	constructor(
		private access_token: string,
		public token_type: string,
		private refresh_token: string,
		private _tokenExpirationDate: Date,
		public role: string[]
	) {}

	get token() {
		if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
			return null;
		}
		return this.access_token;
	}
	get expiresIn() {
		return this._tokenExpirationDate;
	}
}
