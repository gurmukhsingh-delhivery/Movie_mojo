import { getConnection } from '../db/connection';
const client = getConnection();

interface propsGetUserById{
    id: String
}

interface propsGetMovieById{
    id:String
}

interface propsGetUserRating{
    userId: String,
    movieId: String
}


let resolvers = {
    message: () => 'Hello World!',
    getAllUsers: async ()=>{
        try{
            await client.connect();
        const respAllUsers = await client.execute('select * from users');
        return respAllUsers;
        }
        catch(err){
             return err;
        }
       
    },

    getUserById: async({id}:propsGetUserById)=>{

        try{
            await client.connect();
            const queryGetUserWithId  = 'SELECT * FROM users WHERE id = ?';
            const paramsGetUserWithId = [id];
    
            const respGetUserWithId = await client.execute(queryGetUserWithId,paramsGetUserWithId,{prepare: true});
    
            // console.log(respGetUserWithId);
        
            return respGetUserWithId.rows[0];
        }
        catch(err){
            return err;
        }
       
    },

    getAllMovies: async ()=>{

        try{
            await client.connect();
            const respAllMovies = await client.execute('select * from newmovies');
            return respAllMovies;
        }
        catch(err){
            return err;
        }
    },

    getMovieById: async ({id}:propsGetMovieById) =>{
        try{
            await client.connect();
            const queryGetMovieWithId = 'select * from newmovies where id = ?';
            const paramsGetMovieWithId = [id];

            const respGetMovieWithId = await client.execute(queryGetMovieWithId,paramsGetMovieWithId,{prepare:true});
            return respGetMovieWithId.rows[0];
        }
        catch(err){
            return err;
        }
    },

    getUserRating: async ({userId,movieId}: propsGetUserRating)=>{
        const queryGetMapping = "select * from mapping where userid = ? and movieid = ?";
        const paramsGetMapping = [userId,movieId];

        try{
            await client.connect();
            const respGetMapping = await client.execute(queryGetMapping, paramsGetMapping, { prepare: true });

            // console.log(respGetMapping);
            let valObj = {value: respGetMapping.rows[0].rating};
            console.log(valObj);
            return valObj;

        }
        catch(error){
            return error;
        }
    }
};

export {resolvers};