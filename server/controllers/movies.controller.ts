import { Request, Response } from 'express';
import { getConnection } from '../db/connection';

const client = getConnection();

class MyController {
  public static async getMovies(req: Request, res: Response) {
    //  res.send("get all the movies data")
     client.connect()
      .then(() => client.execute('SELECT * FROM movies'))
      .then(result => res.send(result.rows))
      .catch(err => res.send(err));
  }

  public static async get(req: Request, res: Response) {
    const id  = req.params.id;

    const query = 'SELECT * FROM movies WHERE id = ?';
    const params = [id];

    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => res.send(resp.rows))
    .catch(err => res.send(err));
  }

  public static async postMovie(req: Request,res: Response){
    const movie = req.body;
    const query = 'INSERT INTO movies (id, title, releasedate, genre) VALUES (?, ?, ?, ?)';
    const params = [movie.id, movie.Title, movie.Released, movie.Genre];
    
    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => {
        // console.log("sent the data to post route")
        res.send("got to the post route")
    })
    .catch(err => res.send(err));
  }

  public static async deleteMovie(req: Request,res: Response){
    const id  = req.params.id;

    const query = 'DELETE FROM movies WHERE id = ?';
    const params = [id];

    client.connect()
    .then(() => client.execute(query,params,{prepare: true}))
    .then(resp => res.send(resp))
    .catch(err => res.send(err));
  }
}




export default MyController;