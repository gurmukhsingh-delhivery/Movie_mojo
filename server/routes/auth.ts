import { Request, Response, Router } from "express";
import authController from "../controllers/auth.controller"

export class authRoutes {
  public router= Router();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.post("/register",authController.register);
    this.router.post("/login",authController.login);
  }
}