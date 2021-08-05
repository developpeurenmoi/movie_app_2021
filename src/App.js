import React from 'react';
import axios from "axios";
import Movie from "./Movie.js"

class App extends React.Component{
  state = {
    isLoading : true,
    movies: []
  }
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    }  
    = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  }
  componentDidMount() {
    this.getMovies();
  }
  render(){
   const {isLoading} = this.state;
   return <section class="container">{isLoading 
    ? "Loading..." 
   : movies.map(movie=> {
     console.log(movie);
     return(
       <Movie
       id={movie.id}
       year={movie.year}
       title={movie.title}
       summary={movie.summary}
       poster={movie.medium_cover_image}
       />
     )
   })}</section>
  }
}

export default App;
