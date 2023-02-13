import { Request, Response, Router } from "express";
import movieController from "../controllers/movies.controller"
import { verifyToken } from "../middleware/auth";

export class movieRoutes {
  public router= Router();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/",  movieController.getMovies);
    this.router.post("/",movieController.postMovie);
    this.router.get("/:id",verifyToken,movieController.get)
    this.router.delete("/:id",verifyToken,movieController.deleteMovie);
    this.router.post("/ratings",movieController.postRating);
    this.router.post("/getColor",movieController.getColor);
  }
}