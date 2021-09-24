import { JwtPayload } from 'jwt-decode';

export interface IValues {
  login: string;
  password: string;
  confirm?: string;
}
export interface IErrors {
  login?: string;
  password?: string;
  confirm?: string;
}

export interface IUser {
  login: string;
  password: string;
  _v: number;
  _id: string;
}

export interface MyJWTPayload extends JwtPayload {
  _doc: IUser;
}
