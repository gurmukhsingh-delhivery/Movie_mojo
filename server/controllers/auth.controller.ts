import { Request, Response } from 'express';
import { getConnection } from '../db/connection';
import {nanoid} from 'nanoid';
import {hashPassword,validatePassword,generateToken,verifyToken} from "../utils/authFxns";
import multer from "multer";

const client = getConnection();
class authController {
  public static async register(req: Request, res: Response) {
    const id = nanoid();
    const user = req.body;

    // console.log(req.body)
    const query =
      "INSERT INTO users (id, dob, password, name,email) VALUES (?, ?, ?, ?,?)";
    const params = [id, user.dob, user.password, user.name, user.email];

    const query2 = "SELECT * FROM USERS WHERE EMAIL = ?";
    const params2 = [user.email];

    try {
      await client.connect();
      // console.log("connected to database");
      const users = await client.execute(query2, params2, { prepare: true });

      // console.log("here is the list of users with the email inputted")
      // console.log(users.rows);

      // see if a user with the same email already exists
      if (users.rows.length > 0)
        return res.status(400).send("user already exists");

      // console.log(user.password);

      //user is new and then we wait for the password to be hashed
      const hashedPassword = await hashPassword(user.password);

      console.log(user.password, hashedPassword);
      const newParams = [...params];
      newParams[2] = hashedPassword;

      const resp = client.execute(query, newParams, { prepare: true });
      res.status(200).send("registered the user in the database");
    } catch (err) {
      res.status(400).send("not able to register");
    }
  }

  public static async login(req: Request, res: Response) {
    console.log("got to the login route");
    const { email, password } = req.body;
    const query = "SELECT * FROM USERS WHERE email = ?";
    const params = [email];

    console.log(req.body);

    try {
      await client.connect();
      const resp = await client.execute(query, params, { prepare: true });

      if (resp.rows.length == 0) return res.status(400).send("wrong email");

      const comparePassword = await validatePassword(
        password,
        resp.rows[0].password
      );
      if (comparePassword == false)
        return res.status(400).send("wrong password");

      const token = generateToken({ email: email, password: password });
      console.log("token is  ", token);
      res.cookie("token", token, { maxAge: 86400000, httpOnly: false });

      // res.status(200).send("successful login")
      res.redirect("http://localhost:3000/movies");
    } catch (err) {
      // res.status(400).send(err);
      res.redirect("http://localhost:3000/");
    }
  }

  public static async logout(req: Request, res: Response) {
    console.log("got to the logout route");
    res.clearCookie("token");

    res.redirect("http://localhost:3000/");
  }

  public static async editUser(req: Request, res: Response) {
    // console.log("got to the logout route");

    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "userProfile");
      },
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      },
    });

    const upload = multer({ storage: storage });
    
    res.send("got to the editUser route");
  }
}

export default authController;