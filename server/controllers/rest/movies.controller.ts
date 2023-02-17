import { Request, Response } from "express";
import { getConnection } from "../../db/connection";
import {uid} from "uid";
const fetch = require("node-fetch");

import { serverResponse, response } from "../../utils/serverResponse";
import { ServerResponse } from "http";
const client = getConnection();

class MyController {
  public static async getMovies(req: Request, res: Response) {
   
    try {
      await client.connect();
      const respAllMovies = await client.execute("SELECT * FROM newmovies");
      let obj: serverResponse = new response(true, respAllMovies.rows, null);

      let objStr = JSON.stringify(obj);
      res.send(objStr);
    } catch (error) {
      let obj: serverResponse = new response(false, null, error);
      let objStr = JSON.stringify(obj);
      res.send(objStr);
    }
  }

  public static async get(req: Request, res: Response) {
    const id = req.params.id;

    const queryGetMovieWithId = "SELECT * FROM newmovies WHERE id = ?";
    const paramsGetMovieWithId = [id];
   
    try {
      await client.connect();
      let respGetMovieWithId = await client.execute(queryGetMovieWithId, paramsGetMovieWithId, { prepare: true });
      let obj: serverResponse = new response(true, respGetMovieWithId.rows, null);
      let objStr = JSON.stringify(obj);
      res.send(objStr);
    } catch (error) {
      let obj: serverResponse = new response(false, null, error);
      let objStr = JSON.stringify(obj);

      res.send(objStr);
    }
  }

  public static async postMovie(req: Request, res: Response) {
    const movie = req.body;

    let img = "";
    for (let i = 0; i < req.body.Images.length; i = i + 1) {
      if (i == req.body.Images.length - 1) img = img + req.body.Images[i];
      else img = img + req.body.Images[i] + ",";
    }

    const date = new Date(req.body.Released);
    const newDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    console.log(newDate);

    // const releaseDate = `${dateArray[2]}${`${mappingMonths[dateArray[1] || 'Jan']}`}${dateArray[0]}`;
    // console.log("while posting a new movie release date is",releaseDate);

    const queryPostMovie =
      "INSERT INTO newmovies (id,genre,img,released,title,writer,plot,imdb,awards,actors,director) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    const paramsPostMovie = [
      uid(),
      movie.Genre,
      img,
      newDate,
      movie.Title,
      movie.Writer,
      movie.Plot,
      movie.imdbRating,
      movie.Awards,
      movie.Actors,
      movie.Director,
    ];

   
    try {
      await client.connect();
      let respPostMovie = await client.execute(queryPostMovie, paramsPostMovie, { prepare: true });
      let obj: serverResponse = new response(true, respPostMovie, null);
      let objStr = JSON.stringify(obj);

      res.send(objStr);
    } catch (err) {
      let obj: serverResponse = new response(false, null, err);
      let objStr = JSON.stringify(obj);
      res.send(objStr);
    }
  }
  

  public static async deleteMovie(req: Request, res: Response) {
    const id = req.params.id;

    const queryDeleteMovieWithId = "DELETE FROM newmovies WHERE id = ?";
    const paramsDeleteMovieWithId = [id];

    try {
      await client.connect();
      let respDeleteMovie = await client.execute(queryDeleteMovieWithId, paramsDeleteMovieWithId, { prepare: true });
      let obj: serverResponse = new response(true, respDeleteMovie, null);
      let objStr = JSON.stringify(obj);

      res.send(objStr);
    } catch (err) {
      let obj: serverResponse = new response(false, null, err);
      let objStr = JSON.stringify(obj);

      res.send(objStr);
    }
  }

  public static async postRating(req: Request, res: Response) {
    // const resp = await JSON.parse(req.body);

    console.log("got here in post rating");

    const queryDeleteMapping =
      "delete from mapping where userid = ? and movieid = ?";
    const paramsDeleteMapping = [req.body.userId, req.body.movieId];

    const queryInsertMapping =
      "insert into mapping(id,userid,movieid,rating) values (?,?,?,?)";
    const paramsInsertMapping = [
      uid(),
      req.body.userId,
      req.body.movieId,
      req.body.val,
    ];

    const queryCalculateRating =
      "select sum(rating) as rating from mapping where movieid = ?";
    const paramsCalculateRating = [req.body.movieId];

    const queryUpdateRating = "update newmovies set rating = ? where id = ?";

    try {
      await client.connect();
      console.log("here");

      const respDeleteMapping = await client.execute(
        queryDeleteMapping,
        paramsDeleteMapping,
        { prepare: true }
      );

      // then create a new mapping for a rating
      const respInsertMapping = await client.execute(
        queryInsertMapping,
        paramsInsertMapping,
        { prepare: true }
      );
      console.log("created entry in mapping");

      //this is to get the sum of rating for a given movie
      const respCalculateMapping = await client.execute(
        queryCalculateRating,
        paramsCalculateRating,
        { prepare: true }
      );
      const rating = respCalculateMapping.rows[0].rating;

      console.log(rating);

      //after getting the rating sum we update the field in movie table
      const paramsUpdateRating = [rating, req.body.movieId];
      const paramsUpdateResponse = await client.execute(
        queryUpdateRating,
        paramsUpdateRating,
        { prepare: true }
      );

      // res.send("mapping table changed in the database");
      let obj:serverResponse = new response(true,paramsUpdateResponse,null);
      let objStr = JSON.stringify(obj);

      res.send(objStr);
      // res.redirect(`http://localhost:3000/movies/${req.body.movieId}`);
    } catch (error) {
      console.log("error");
      let obj:serverResponse = new response(false,null,error);
      let objStr = JSON.stringify(obj);
      res.send(objStr);
    }
  }

  public static async getUserRating(req: Request, res: Response) {
    // console.log("here in getUserRating");
    const queryGetMapping = "select * from mapping where userid = ? and movieid = ?";
    const paramsGetMapping = [req.body.userId, req.body.movieId];

    try {
      const respGetMapping = await client.execute(queryGetMapping, paramsGetMapping, { prepare: true });

     
      let valObj = {value: respGetMapping.rows[0].rating};
      let obj:serverResponse = new response(true,valObj,null);
      let objStr = JSON.stringify(obj);

      console.log(objStr);

      res.send(objStr);
      // return res.status(200).json({ value: resp1.rows[0].rating });
    } catch (err) {
      let obj:serverResponse = new response(false,null,err);
      let objStr = JSON.stringify(obj);

      res.send(objStr);
    }
  }
}

export default MyController;
