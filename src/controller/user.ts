import { uuid } from "uuidv4";
import { prisma } from "../lib/prisma";
import { UserDTO, UserJWT } from "../types";

class User {
  async create({ email, password, username }: UserDTO) {
    const alreadyExistUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (alreadyExistUser) {
      throw new Error("user already exist");
    }

    await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
  }

  async authenticate({
    email,
    password,
  }: Omit<UserDTO, "username">): Promise<UserJWT> {
    const alreadyExistUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!alreadyExistUser) {
      throw new Error("user not found");
    }
    if (alreadyExistUser.password !== password) {
      throw new Error("passoword incorrect");
    }

    const jwt: UserJWT = {
      id: alreadyExistUser.id,
      email: alreadyExistUser.email,
      username: alreadyExistUser.username,
      token: uuid(),
    };

    return jwt;
  }
}
export default new User();
