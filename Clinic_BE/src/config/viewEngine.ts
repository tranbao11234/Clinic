import express, { Express } from "express";

// Define the configViewEngine function with explicit types for the app parameter
const configViewEngine = (app: Express): void => {
  // Serve static files from the "public" folder
  app.use(express.static("./src/public"));

  // Set the view engine to EJS
  app.set("view engine", "ejs");

  // Set the directory for views
  app.set("views", "./src/views");
};

export default configViewEngine;
