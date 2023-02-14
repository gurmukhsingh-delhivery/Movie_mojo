import { Request, Response } from 'express';
import { getConnection } from '../db/connection';
import {nanoid} from 'nanoid';
const fetch = require("node-fetch")

import {serverResponse,response} from "../utils/serverResponse";
const client = getConnection();



class MyController {
  public static async getMovies(req: Request, res: Response) {
     client.connect()
      .then(() => client.execute('SELECT * FROM newmovies'))
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

    const query = 'SELECT * FROM newmovies WHERE id = ?';
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

    let img = "";
    for(let i = 0;i < req.body.Images.length;i = i + 1){
      if(i == req.body.Images.length - 1) img =  img +  req.body.Images[i];
      else img = img +  req.body.Images[i] + ",";
    }

    const query = 'INSERT INTO newmovies (id,genre,img,released,title,writer,plot,imdb,awards,actors,director) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    const params = [nanoid(),movie.Genre, img, '2011-02-03', movie.Title,movie.Writer,movie.Plot,movie.imdbRating,movie.Awards,movie.Actors,movie.Director];

   
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

    const query = 'DELETE FROM newmovies WHERE id = ?';
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

  public static async postRating(req: Request, res: Response) {
    // const resp = await JSON.parse(req.body);

    console.log("got here in post rating")

    const queryDeleteMapping  = "delete from mapping where userid = ? and movieid = ?";
    const paramsDeleteMapping = [req.body.userId,req.body.movieId];
  
    const queryInsertMapping  = "insert into mapping(id,userid,movieid,rating) values (?,?,?,?)"
    const paramsInsertMapping = [nanoid(),req.body.userId,req.body.movieId,req.body.val];

    

    const queryCalculateRating = "select sum(rating) as rating from mapping where movieid = ?"
    const paramsCalculateRating = [req.body.movieId];

    const queryUpdateRating = "update newmovies set rating = ? where id = ?"

    try {
         await client.connect();
        console.log("here");
      
        const resp2 = await client.execute(queryDeleteMapping, paramsDeleteMapping, { prepare: true });
        

        // then create a new mapping for a rating
        const resp3 = await client.execute(queryInsertMapping, paramsInsertMapping, { prepare: true });
        console.log("created entry in mapping")


        //this is to get the sum of rating for a given movie
        const resp4 = await client.execute(queryCalculateRating, paramsCalculateRating, { prepare: true });
        const rating  = resp4.rows[0].rating;
        
        console.log(rating);

        //after getting the rating sum we update the field in movie table
        const paramsUpdateRating = [rating,req.body.movieId];
        const resp5 = await client.execute(queryUpdateRating, paramsUpdateRating, { prepare: true });


        res.send("mapping table changed in the database");
      // res.redirect(`http://localhost:3000/movies/${req.body.movieId}`);
    } catch (error) {
      console.log("error")
      res.send("some issue is there");
    }

  }

  public static async getUserRating(req: Request, res: Response) {
    const query1 = "select * from mapping where userid = ? and movieid = ?";
    const params1 = [req.body.userId,req.body.movieId];

    try{
      const resp1 = await client.execute(query1, params1, { prepare: true });
      return res.status(200).json({value: resp1.rows[0].rating});
      
    }
    catch(err){
        res.send("error in fetching color")
    }
  }

}




export default MyController;