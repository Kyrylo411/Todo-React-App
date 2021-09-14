import { JwtPayload } from 'jwt-decode';

interface IDoc {
	login: string;
	password: string;
	_v: number;
	_id: string;
}

export type customJwtPayload = JwtPayload & { _doc: IDoc };
