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
    this.router.post("/",verifyToken, movieController.postMovie);
    this.router.get("/:id",verifyToken,movieController.get)
    this.router.delete("/:id",verifyToken,movieController.deleteMovie);
    this.router.post("/ratings",verifyToken, movieController.postRating);
    this.router.post("/getUserRating",verifyToken, movieController.getUserRating);
  }
}