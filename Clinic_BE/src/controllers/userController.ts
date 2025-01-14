import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { createUserService, getUsersService } from "../services/user.services";

export const getCreateUserPage = (req: Request, res: Response) => {
  res.render("users/createuserpage.ejs");
};

export const getUserPage = async (req: Request, res: Response) => {
  try {
    const data = await getUsersService();

    res.render("users/userpage.ejs", { users: data });
  } catch (error) {
    console.log(error);
  }
};

export const createUserAction = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("email and password are required");
    return;
  }

  try {
    // Hash the password using bcrypt
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hashSync(password, saltRounds);

    const payload = {
      ...req.body,
      password: hashedPassword,
      gender: req.body.gender === "1" ? true : false,
    };
    await createUserService(payload);

    res.status(201).send({
      email,
      hashedPassword,
    });
  } catch (e) {
    res.status(500).send(e);
  }
};
