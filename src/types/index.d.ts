import { Role } from "@prisma/client";
import { prisma } from "../lib/prisma";

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type Employee = {
  id: string;
  name: string;
  key_access: string;
  role_id: string;
};


export type UserDTO = Omit<User, "id">;

export interface UserJWT extends Omit<User, "password"> {
  token: string;
}

export type EmployeeDTO = Omit<Employee, "id">;

export interface EmployeeJWT extends Omit<Employee, "key_acess"> {
  token: string;
}
