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
    key_access,
  }: Omit<EmployeeDTO, "name">): Promise<EmployeeJWT>{
    const alredyExistEmployee = await prisma.user.findFirst({
      where:{
       , 
      },
    });
  }*/








}
