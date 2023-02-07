import { Request, Response } from 'express';
import { getConnection } from '../db/connection';
import {nanoid} from 'nanoid';
const fetch = require("node-fetch")

import {serverResponse,response} from "../utils/serverResponse";
const client = getConnection();



class MyController {
  public static async getMovies(req: Request, res: Response) {
    //  res.send("get all the movies data"
    res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.set('Access-Control-Allow-Credentials', 'true')
     client.connect()
      .then(() => client.execute('SELECT * FROM movies'))
      .then(result => {
        let obj:serverResponse = new response(true,result.rows,null);

        let objStr = JSON.stringify(obj);
        res.send(objStr);
      })
      .catch(err => {
        let obj:serverResponse = new response(false,null,err);
        let objStr = JSON.stringify(obj);
  
        res.send(objStr)
      });
  }

  public static async get(req: Request, res: Response) {
    const id  = req.params.id;

    const query = 'SELECT * FROM movies WHERE id = ?';
    const params = [id];

    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => {
        let obj:serverResponse = new response(true,resp.rows,null);

        let objStr = JSON.stringify(obj);
        res.send(objStr);
    })
    .catch(err => {
        let obj:serverResponse = new response(false,null,err);
        let objStr = JSON.stringify(obj);
  
        res.send(objStr)
    });
  }

  public static async postMovie(req: Request,res: Response){
    const movie = req.body;
    const query = 'INSERT INTO movies (id,genre,img,releaseDate,title) VALUES (?,?, ?, ?, ?)';
    const params = [nanoid(),movie.Genre, movie.Images[0], '2011-02-03', movie.Title];

   
    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => {
         
        let obj:serverResponse = new response(true,resp,null);

        let objStr = JSON.stringify(obj);
        res.send(objStr);
    })
    .catch(err => {
        let obj:serverResponse = new response(false,null,err);
        let objStr = JSON.stringify(obj);


        res.send(objStr);
    });
    
  }

  public static async deleteMovie(req: Request,res: Response){
    const id  = req.params.id;

    const query = 'DELETE FROM movies WHERE id = ?';
    const params = [id];

    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => {
      let obj:serverResponse = new response(true,resp,null);
      let objStr = JSON.stringify(obj);

      res.send(objStr)
    })
    .catch(err => {
      let obj:serverResponse = new response(false,null,err);
      let objStr = JSON.stringify(obj);

      res.send(objStr)
    });
  }

}




export default MyController;