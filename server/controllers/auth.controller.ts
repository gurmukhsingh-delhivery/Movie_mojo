import { Request, Response } from 'express';
import { getConnection } from '../db/connection';
import {nanoid} from 'nanoid';

const client = getConnection();

class authController {
  public static async register(req: Request,res: Response){
    const id = nanoid();
    const user = req.body;
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
   
  
}

export default authController;