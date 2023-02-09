import { Request, Response, Router } from "express";
import authController from "../controllers/auth.controller"

const multer  = require('multer')
const upload = multer({ dest: './dist/userProfile/' })

export class authRoutes {
  public router= Router();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.get("/",authController.getAllUsers);
    this.router.post("/register",authController.register);
    this.router.post("/login",authController.login);
    this.router.post("/editUser/:id",upload.single('avatar'), authController.editUser)
    this.router.get("/logout",authController.logout);
    this.router.get("/:id",authController.getUser);
  }
}