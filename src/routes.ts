import { Express, Router } from "express";
import user from "./controller/user";
import z from "zod";
import { UserDTO, EmployeeDTO } from "./types";
import employee from "./controller/employee";
export const router = Router();

router.post("/user", async (req, res) => {
  const { email, password, username } = req.body as UserDTO;
  try {
    await user.create({
      username,
      email,
      password,
    });
    return res.status(200).redirect("/signin");
  } catch (error) {
    res.status(500).json(error).redirect("/signup");
  }
});


router.post("/employee", async (req, res) => {
  const {name, key_access, role_id} = req.body as EmployeeDTO;
  try {
    await employee.create({
      name,
      key_access,
      role_id,
    });
    return res.status(200).redirect("/employee/signin");
  } catch (error) {
    res.status(500).json(error).redirect("/employee/signup");
  }
});



router.post("/user/auth", async (req, res) => {
  const { email, password } = req.body as UserDTO;
  try {
    const token = await user.authenticate({
      email,
      password,
    });

    res.cookie("delivery-app-atividade-pw.session", token);

    return res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json(error).redirect("/signin");
  }
});


/*
router.post("/employee/auth", async (req, res) => {
  const { name, key_access } = req.body as EmployeeDTO;
  try {
    const token = await employee.authenticate({
      name,
      key_access,
    });

    res.cookie("delivery-app-atividade-pw.session", token);

    return res.status(200).redirect("/");
  } catch (error) {
    res.status(500).json(error).redirect("/employee/signin");
  }
});*/
