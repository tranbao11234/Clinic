import express, { Router, Express } from "express";
import { getHomePage } from "../controllers/homeController";
import {
  getCreateUserPage,
  createUserAction,
  getUserPage,
} from "../controllers/userController";

const router: Router = express.Router();

// Define the initWebRoutes function with explicit types for the app parameter
const initWebRoutes = (app: Express) => {
  router.get("/", getHomePage);

  // User
  router.get("/users", getUserPage);
  router.get("/users/create-ui", getCreateUserPage);
  router.post("/users/create", createUserAction);

  // Use the router with the provided app
  return app.use("/", router);
};

export default initWebRoutes;
