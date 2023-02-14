import {serverResponse,response} from "../utils/serverResponse";
const client = getConnection();

async function createMovies() {
    const createTableMovies = `
      CREATE TABLE IF NOT EXISTS newmovies (
        id text PRIMARY KEY,
        actors text,
        awards text,
        director text,
        genre text,
        imdb text,
        img text,
        plot text,
        rating int,
        released date,
        title text,
        writer text
      );
    `;
  
    try {
      await client.execute(createTableMovies);
      console.log('Movie table created successfully!');
    } catch (err) {
      console.error('Error creating table:', err);
    }
  }

  async function createUsers() {
    const createTableUsers= `
      CREATE TABLE IF NOT EXISTS users (
        id text PRIMARY KEY,
        avatar text,
        dob text,
        email text,
        name text,
        password text
      );
    `;
  
    try {
      await client.execute(createTableUsers);
      console.log('Movie table created successfully!');
    } catch (err) {
      console.error('Error creating table:', err);
    }
  }


  async function createMapping() {
    const createTableMapping = `
      CREATE TABLE IF NOT EXISTS mapping (
        id text,
        movieid text,
        rating int,
        userid text,
        PRIMARY KEY((movieid),userid,id)
      );
    `;
  
    try {
      await client.execute(createTableMapping);
      console.log('Movie table created successfully!');
    } catch (err) {
      console.error('Error creating table:', err);
    }
  }

  async function createUserIndex() {
    const userIndexEmail = `
      CREATE INDEX on users(email);
    `;
  
    try {
      await client.execute(userIndexEmail);
      console.log('index on user created successfully!');
    } catch (err) {
      console.error('Error creating index on user table:', err);
    }
  }

export {createMovies,createUsers,createUserIndex,createMappingIndex};