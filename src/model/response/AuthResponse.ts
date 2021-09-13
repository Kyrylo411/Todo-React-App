export interface IUser {
	login: string;
	password: string;
	id?: string;
}

export interface AuthResponse {
	accesstoken: string;
	refreshtoken: string;
	user: IUser;
}
