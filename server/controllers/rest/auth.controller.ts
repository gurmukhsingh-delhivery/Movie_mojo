import { Request, Response } from 'express';
import { getConnection } from '../../db/connection';
import {uid} from "uid";
import {hashPassword,validatePassword,generateToken,verifyToken} from "../../utils/authFxns";
import path from "path"
import { clientUrl } from '../../constants/clientDetails';
import { serverResponse, response } from "../../utils/serverResponse";


const client = getConnection();
class authController {
  public static async register(req: Request, res: Response) {
    const id = uid();
    const user = req.body;

    // console.log(req.body)
    const queryRegisterUser =
      "INSERT INTO users (id, dob, password, name,email) VALUES (?, ?, ?, ?,?)";
    const paramsRegisterUser = [id, user.dob, user.password, user.name, user.email];

    const querySelectUserWithEmail = "SELECT * FROM USERS WHERE EMAIL = ?";
    const paramsSelectUserWithEmail = [user.email];

    try {
      await client.connect();
      // console.log("connected to database");
      const users = await client.execute(querySelectUserWithEmail, paramsSelectUserWithEmail, { prepare: true });

      // console.log("here is the list of users with the email inputted")
      // console.log(users.rows);

      // see if a user with the same email already exists
      if (users.rows.length > 0){ 
        // return res.status(200).send("user already exists");

        let obj:serverResponse = new response(false,"user already exists",false);
        let objStr = JSON.stringify(obj);

        return res.send(objStr);

      }
       

      // console.log(user.password);

      //user is new and then we wait for the password to be hashed
      const hashedPassword = await hashPassword(user.password);

      console.log(user.password, hashedPassword);
      const newParamsRegisterUser = [...paramsRegisterUser];
      newParamsRegisterUser[2] = hashedPassword;

      const respRegisterUser = client.execute(queryRegisterUser, newParamsRegisterUser, { prepare: true });
      let obj:serverResponse = new response(true,respRegisterUser,null);
      let objStr = JSON.stringify(obj);

      res.send(objStr);
    } catch (err) {
      let obj:serverResponse = new response(false,null,"not able to register");
      let objStr = JSON.stringify(obj);

      res.send(objStr);
      // res.status(200).send("not able to register");
    }
  }

  public static async login(req: Request, res: Response) {
    console.log("got to the login route");
    const { email, password } = req.body;
    const querySelectUserWithEmail = "SELECT * FROM USERS WHERE email = ?";
    const paramsSelectUserWithEmail = [email];

    console.log(req.body);

    try {
      await client.connect();
      const resp = await client.execute(querySelectUserWithEmail, paramsSelectUserWithEmail, { prepare: true });

      if (resp.rows.length == 0){
        let obj:serverResponse = new response(false,null,"wrong email");
        let objStr = JSON.stringify(obj);
  
        res.send(objStr);
        
      }

      const comparePassword = await validatePassword(
        password,
        resp.rows[0].password
      );
      if (comparePassword == false){
        let obj:serverResponse = new response(false,null,"wrong password");
        let objStr = JSON.stringify(obj);
  
        res.send(objStr);
      }
        

      const token = generateToken({ email: email, password: password });
      console.log("token is  ", token);
      res.cookie("token", token, { maxAge: 86400000, httpOnly: false });

      const id = resp.rows[0].id;
      res.cookie("userId",id,{maxAge:86400000,httpOnly: false})

      // res.status(200).send("successful login")
      res.redirect(`${clientUrl}/movies`);
    } catch (err) {
      // res.status(400).send(err);
      res.redirect(clientUrl);
    }
  }

  public static async logout(req: Request, res: Response) {
    console.log("got to the logout route");
    res.clearCookie("token");
    res.clearCookie("userId");

    res.redirect(clientUrl);
  }

  public static async getUser(req: Request, res: Response) {
    const id  = req.params.id;

    const queryGetUserWithId  = 'SELECT * FROM users WHERE id = ?';
    const paramsGetUserWithId = [id];


     try{
        await client.connect();
        const respGetUserWithId = await client.execute(queryGetUserWithId,paramsGetUserWithId,{prepare: true});
        // res.send(respGetUserWithId.rows);

        let obj:serverResponse = new response(true,respGetUserWithId.rows,null);
        let objStr = JSON.stringify(obj);

        res.send(objStr);
     }
     catch(error){
        let obj:serverResponse = new response(true,null,error);
        let objStr = JSON.stringify(obj);
        res.send(objStr);
        // res.send(error)
     }
  }




  public static async editUser(req: Request, res: Response) {
    // console.log(req.file,req.body);
    
    const id  = req.params.id;

    const user = await JSON.parse(req.body.user)
    // console.log(user)

    const query = "update users set name = ?,avatar = ? where id = ?";
    const params = [req.body.name,req.file ? req.file.filename: user.avatar,id];

    
    try{
        await client.connect();
        const resp = await client.execute(query, params, { prepare: true });
        // res.send("data changed in the database");
        res.redirect(`${clientUrl}/userProfile`)
    }
    catch(error){
          let obj:serverResponse = new response(true,null,error);
          let objStr = JSON.stringify(obj);

          res.send(objStr);
          // res.send(error);
    }
  }
}

export default authController;