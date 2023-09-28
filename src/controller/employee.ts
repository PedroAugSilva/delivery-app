import { uuid } from "uuidv4";
import { prisma } from "../lib/prisma";
import { EmployeeDTO, EmployeeJWT } from "../types";

class Employee {
  async create({name, key_access, role_id}: EmployeeDTO) {
    const alredyExistEmployee = await prisma.employee.findFirst({
      where:{
        name,
      },
    });

    if (alredyExistEmployee){
      throw new Error("user already exist")
    }

    await prisma.employee.create({
      data: {
        name,
        key_access,
        role_id,
      },
    });
  }
  
/*
  async authenticate({
    name,
    key_access,
  }: Omit<EmployeeDTO, "name">): Promise<EmployeeJWT>{
    const alredyExistEmployee = await prisma.user.findFirst({
      where:{
        name, 
      },
    });

    if (!alredyExistEmployee) {
      throw new Error("user not found");
    }
    if (alredyExistEmployee.key_access !== key_access) {
      throw new Error("passoword incorrect");
    }

    const jwt: EmployeeJWT = {
      id: alredyExistEmployee.id,
      name: alredyExistEmployee.name,
      token: uuid(),
    };

    return jwt;
    
  }*/

}
  export default new Employee();
  