import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import MovieCard from "../components/MovieCard";
import "./Pages.css"

const UNFILTERED = 'https://api.themoviedb.org/3/discover/movie?api_key=5f5b4d8dc0b6f07148c843b44172493e'

const FILTERED = 'https://api.themoviedb.org/3/search/movie?api_key=5f5b4d8dc0b6f07148c843b44172493e&query='

const Main = () => {
    const [searchTerm,setSearchTerm]=useState("")
    const [movies,setMovies]=useState([])
    const getMovies = (API) => {
        axios.get(API)
             .then((res)=>console.log(res))
             .catch((err) => {console.log(err)})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        getMovies(FILTERED)
        setSearchTerm("")
    }
    useEffect(() => {
        getMovies(UNFILTERED)
    },[]);

 return(
     <React.Fragment>
         <form className="search" onSubmit={handleSubmit}>
             <input type="search"
             placeholder="Search a movie..."
             className="search-input"
             value={searchTerm}
             onChange={(e)=> setSearchTerm(e.target.value) } />
             <input type="submit"
                    value="Search"
                    className="btn btn-primary"/>
         </form>
         <div className="movie-container">
             {
                 movies.map((movie)=> {
                     return (
                         <MovieCard
                           key={movie.id}
                           title={movie.title}
                           poster_path={movie.poster_path}
                           overview={movie.overview}
                           vote_average={movie.vote_average}/>

                     )
                 })
             }
         </div>
         
     </React.Fragment>
 )

}

export default Main