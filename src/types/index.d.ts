import { prisma } from "../lib/prisma";

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type Employer = {
  id: string;
  name: string;
  email: string;
  key_acess: string;
  role: string;
};



export type UserDTO = Omit<User, "id">;

export interface UserJWT extends Omit<User, "password"> {
  token: string;
}

export type EmployerDTO = Omit<Employer, "id">;

export interface EmployerJWT extends Omit<Employer, "key_acess"> {
  token: string;
}
