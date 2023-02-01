import { Application } from "express";
import { movieRoutes } from "./routes/movies";

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import app from "./app";


class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setControllers();
    this.setRoutes();
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({ limit: "50mb" }));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    // Enables cors
    this.app.use(cors());
    
  }
  
  private setControllers() {
      console.log("set controllers")
  }

  private setRoutes(){
       const movie = new movieRoutes();
       this.app.use('/movies',movie.router)
  }

}

export default new App().app;