import { Request, Response, Router } from "express";
import authController from "../controllers/rest/auth.controller"

const multer  = require('multer')
const upload = multer({ dest: './dist/userProfile/' })
import { verifyToken } from "../middleware/auth";

export class authRoutes {
  public router= Router();

  constructor() {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.post("/register",  authController.register);
    this.router.post("/login", authController.login);
    this.router.post("/editUser/:id",verifyToken, upload.single('avatar'), authController.editUser)
    this.router.get("/logout",verifyToken,authController.logout);
    this.router.get("/:id",verifyToken,authController.getUser);
  }
}