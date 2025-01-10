import express from "express";
import bodyParser from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

const app = express();

// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

configViewEngine(app);
initWebRoutes(app);

// Connect to DB
connectDB();

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log("Backend nodejs is running on the port: " + port);
});
