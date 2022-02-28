import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import MovieCard from "../components/MovieCard";
import "./Pages.css"
import Loading from "./Loading";
import NotFound from "./NotFound";
import AuthContex from "../context/AuthContext";

// const UNFILTERED = 'https://api.themoviedb.org/3/discover/movie?api_key='
const UNFILTERED = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`

const FILTERED = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`

const Main = () => {

    const [searchTerm,setSearchTerm]=useState("")
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState(false)
    const [notFound,setNotFound]=useState(false)
    let content;
    const {currentUser} = useContext(AuthContex)


    const getMovies = (API) => {
        setNotFound(false)
        setLoading(true)
        axios.get(API)
             .then((res)=>{
                 setMovies(res.data.results)
                //  setTimeout(()=>{
                //     setLoading(false)
                //  },1000)
                setLoading(false)
                 if(res.data.results.length==0){
                    setNotFound(true)
                }
             })
             .catch((err) => {
                 console.log(err)
                setLoading(false)})
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentUser){
            getMovies(FILTERED+searchTerm)
        setSearchTerm("")
        }else{
            alert("Please log in to make a search")
        }
        
    }

    useEffect(() => {
        getMovies(UNFILTERED)
    },[]);

    if(loading){
        content=<Loading/>
    }
    else if(notFound){
        content=<NotFound/>
    }
    else{
      
        content=   <div className="movie-container">
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
    }

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
                    className="btn btn-primary"
                    style={{backgroundColor:"#4fa7c2"}}/>
         </form>
         {content}
         
     </React.Fragment>
 )

}

export default Main