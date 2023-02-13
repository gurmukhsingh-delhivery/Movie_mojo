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

    const query1 = "select * from mapping where userid = ? and movieid = ? ALLOW FILTERING";
    const params1 = [req.body.userId,req.body.movieId];
    // console.log(req.body.userId);
    const query2 = "delete from mapping where id = ?";
  
    const query3 = "insert into mapping(id,userid,movieid,rating) values (?,?,?,?)"
    const params3 = [nanoid(),req.body.userId,req.body.movieId,req.body.val];

    

    const query4 = "select sum(rating) as rating from mapping where movieid = ?"
    const params4 = [req.body.movieId];

    const query5 = "update newmovies set rating = ? where id = ?"

    try {
         await client.connect();
        console.log("here");

        // first query is for getting the id of mapping from userid and movieid
        const resp1 = await client.execute(query1, params1, { prepare: true });
        
        // if there is a mapping then delete it
        if(resp1.rows.length > 0){
          const params2 = [resp1.rows[0].id];
          const resp2 = await client.execute(query2, params2, { prepare: true });
        }

        // then create a new mapping for a rating
        const resp3 = await client.execute(query3, params3, { prepare: true });
        console.log("created entry in mapping")


        //this is to get the sum of rating for a given movie
        const resp4 = await client.execute(query4, params4, { prepare: true });
        const rating  = resp4.rows[0].rating;
        
        console.log(rating);

        //after getting the rating sum we update the field in movie table
        const params5 = [rating,req.body.movieId];
        const resp5 = await client.execute(query5, params5, { prepare: true });


        res.send("mapping table changed in the database");
      // res.redirect(`http://localhost:3000/movies/${req.body.movieId}`);
    } catch (error) {
      console.log("error")
      res.send("some issue is there");
    }

  }

  public static async getColor(req: Request, res: Response) {
    const query1 = "select * from mapping where userid = ? and movieid = ? ALLOW FILTERING";
    const params1 = [req.body.userId,req.body.movieId];

    try{
      const resp1 = await client.execute(query1, params1, { prepare: true });
      
      
      // if there is a mapping then delete it
      if(resp1.rows.length > 0){
        return res.status(200).json({value: resp1.rows[0].rating});
      }
      else {
        return res.status(200).json({value: resp1.rows[0].rating});
      }
    }
    catch(err){
        res.send("error in fetching color")
    }
  }

}




export default MyController;