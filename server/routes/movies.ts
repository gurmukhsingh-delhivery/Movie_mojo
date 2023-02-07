import { Request, Response, Router } from "express";
import movieController from "../controllers/movies.controller"
import { verifyToken } from "../middleware/auth";

export class movieRoutes {
  public router= Router();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/",verifyToken,  movieController.getMovies);
    this.router.post("/",movieController.postMovie);
    this.router.get("/:id",movieController.get)
    this.router.delete("/:id",movieController.deleteMovie);
  }
}