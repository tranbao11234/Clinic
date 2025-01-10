import express, { Router, Express } from "express";
import { getHomePage } from "../controllers/homeController";

const router: Router = express.Router();

// Define the initWebRoutes function with explicit types for the app parameter
const initWebRoutes = (app: Express): void => {
  router.get("/", getHomePage);

  // Use the router with the provided app
  app.use("/", router);
};

export default initWebRoutes;
