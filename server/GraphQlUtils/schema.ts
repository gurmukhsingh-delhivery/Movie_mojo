import {buildSchema} from "graphql"

let schema = buildSchema(`
    type Id{
        id:String
    }
    
    type User{
        id:String
        avatar: String,
        dob: String,
        email: String,
        name:String,
        password:String
    }

    type Mapping{
        movieid:String,
        userid:String,
        id:String,
        rating:Int
    }

    type Movie{
        id:String,
        actors:String,
        awards:String,
        director:String,
        genre:String,
        imdb:String,
        img:String,
        plot:String,
        rating:String,
        released:String,
        title:String,
        writer:String
    }

    type UserRating{
        value:Int
    }


    type Query {
        message: String,
        getAllUsers: [User],
        getUserById(id:String!): User,
        getAllMovies:[Movie],
        getMovieById(id:String):Movie,
        getUserRating(userId:String,movieId:String):UserRating
    }
`);

export {schema};