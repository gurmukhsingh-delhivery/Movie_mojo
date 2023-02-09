import { Application } from "express";
import { movieRoutes } from "./routes/movies";
import { authRoutes } from "./routes/auth";

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as dotEnv from "dotenv";
import cookieParser from "cookie-parser"
import path from "path"


class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.setConfig();
    this.setControllers();
    this.setRoutes();
  }

  private setConfig() {
    this.app.use(cors({
      origin : "http://localhost:3000",
      credentials: true, // <= Accept credentials (cookies) sent by the client
    }));
    
    this.app.use(cookieParser());
    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: "50mb" }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    // Enables cors

    this.app.use(express.static(path.join(__dirname,"/userProfile")))
    // console.log("in app.ts file" ,__dirname);
    
    dotEnv.config();
  }
  
  private setControllers() {
      console.log("set controllers")
  }

  private setRoutes(){
       const movie = new movieRoutes();
       this.app.use('/movies',movie.router)

       const auth = new authRoutes();
       this.app.use("/user",auth.router)
       
  }

}

export default new App().app;