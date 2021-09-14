export interface IUser {
	login: string;
	password: string;
	_id?: string;
}

export interface AuthResponse {
	accessToken: string;
	refreshToken: string;
	user: IUser;
}
