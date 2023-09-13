import { prisma } from "../lib/prisma";

export type User = {
  id: string;
  username: string;
  email: string;
  password: string;
};

export type UserDTO = Omit<User, "id">;

export interface UserJWT extends Omit<User, "password"> {
  token: string;
}
