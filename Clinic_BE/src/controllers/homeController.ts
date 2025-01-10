import { Request, Response } from "express";

export const getHomePage = (req: Request, res: Response) => {
  res.render("homepage.ejs");
};
