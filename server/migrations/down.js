import {serverResponse,response} from "../utils/serverResponse";
const client = getConnection();

  async function truncateMovieTable() {
    const deleteTableMovies = `
      truncate table newmovies;
    `;
  
    try {
      await client.execute(deleteTableMovies);
      console.log('deleted all data from newmovies table!');
    } catch (err) {
      console.error('Error in truncating movie table:', err);
    }
  }

  async function truncateUserTable() {
    const deleteTableUsers = `
      truncate table users;
    `;
  
    try {
      await client.execute(deleteTableMovies);
      console.log('deleted all data from users table!');
    } catch (err) {
      console.error('Error in truncating user table:', err);
    }
  }

  async function truncateMappingTable() {
    const deleteTableMapping = `
      truncate table mapping;
    `;
  
    try {
      await client.execute(deleteTableMapping);
      console.log('deleted all data from users table!');
    } catch (err) {
      console.error('Error in truncating mapping table:', err);
    }
  }


  async function deleteMoviesTable() {
    const dropTableMovies = `
      drop table mapping;
    `;
  
    try {
      await client.execute(dropTableMovies);
      console.log('dropped movie table!');
    } catch (err) {
      console.error('Error  in dropping movie table:', err);
    }
  }


  async function deleteUsersTable() {
    const dropTableUsers = `
      drop table users;
    `;
  
    try {
      await client.execute(dropTableUsers);
      console.log('dropped user table!');
    } catch (err) {
      console.error('Error  in dropping user table:', err);
    }
  }

  async function deleteMappingTable() {
    const dropTableMapping = `
      drop table mapping;
    `;
  
    try {
      await client.execute(dropTableMapping);
      console.log('dropped mapping table!');
    } catch (err) {
      console.error('Error  in dropping user table:', err);
    }
  }

  export {truncateMappingTable,truncateUserTable,truncateUserTable,deleteMappingTable,deleteUsersTable,deleteUsersTable};



