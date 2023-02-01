interface Movie{
    id: Number;
    title: String;
    releaseDate: String;
    genre: String;
}

 
const movies: Movie[] = [
    { id: 1, title: "The Shawshank Redemption", releaseDate: "1994-10-14", genre: "Drama" },
    { id: 2, title: "The Godfather", releaseDate: "1972-03-24", genre: "Crime, Drama" },
    { id: 3, title: "The Dark Knight", releaseDate: "2008-07-18", genre: "Action, Crime, Drama" },
    { id: 4, title: "Pulp Fiction", releaseDate: "1994-09-10", genre: "Crime, Drama" },
    { id: 5, title: "The Lord of the Rings: The Return of the King", releaseDate: "2003-12-17", genre: "Adventure, Fantasy" }
]

movies.push({id:6, title: "Inception", releaseDate: "2010", genre: "Action, Sci-Fi" });

export default movies;