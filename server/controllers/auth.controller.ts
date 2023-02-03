import { Request, Response } from 'express';
import { getConnection } from '../db/connection';
import {nanoid} from 'nanoid';

const client = getConnection();

class authController {
  public static async register(req: Request,res: Response){
    const id = nanoid();
    const user = req.body;

    if(user.password.localeCompare(user.confirm_password) != 0) res.send("confirm password and password are not same")

    const query = 'INSERT INTO users (id, dob, password, username) VALUES (?, ?, ?, ?)';
    const params = [id, user.dob,user.password,user.username];
    
    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => {
        // console.log("sent the data to post route")
        res.send("posting the data into the scylladb database")
    })
    .catch(err => res.send(err));
    // res.send("registered the user");
  }
   

  public static async login(req: Request,res: Response){
    console.log("got to the login route");
    const {username,password} = req.body;
    const query = 'SELECT * FROM USERS WHERE username = ?';
    const params = [username];
    
    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => {
        // console.log("sent the data to post route")
        // res.send(resp.rows);
        
        if(resp.rows[0].password == password){
          console.log("correct password");
          res.send("user logged in");
        }
        else{
          console.log("wrong password")
          res.render("wrong password or username")
        }

    })
    .catch(err => res.send(err));

    // res.send("registered the user");
  }
  
}

export default authController;