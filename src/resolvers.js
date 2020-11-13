const {Movies} = require('./db/data');

module.exports =  {
  Query: {
    hello(){
      return "Hello From Deepankar's Server"
    },
    movies(){
      return Movies
    },
    movie(root, args , context ){
      const {name} = args;
      if(!name || name === " ") return null;
      const foundMovie = Movies.find((movie) => movie.name === name);
      if(!foundMovie) return null;
      return foundMovie;
    },
    moviesList(root, args , context){
      const {sorted} = args;
      if(sorted){
        let sortedArr = Movies.sort((b,a)=> a.rating - b.rating  )
        return sortedArr
      } else{
        return Movies;
      }
    },
    moviesGenres(root, args, context){
      const { genre } = args;
      if(!genre || genre === " " ) return null ; 
      const genreMovies = Movies.filter((movie) => {
        return movie.genres.includes(genre)
      })
      if(!genreMovies) return null;
      return genreMovies
    }
  }
}