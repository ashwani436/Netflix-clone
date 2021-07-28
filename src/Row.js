import React,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css';
// import requests from './requests';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url="https://image.tmdb.org/t/p/original/";

const Row=({ title,fetchURL,isLargeRow})=> {
    const [movies, setMovies] = useState([]);
    const[trailerUrl,setTrailerUrl]=useState(false);

    useEffect(() => {
      //Run nce when the row loads,and dont run again
      async function fetchData(){
          const request=await axios.get(fetchURL);
              //fetchURL="https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213"
            setMovies(request.data.results);
            ;
        }
        fetchData();
    }, [fetchURL]);
    console.log(movies);

    const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
    };
 const handleClick=(movie)=>{
            if(trailerUrl){
                setTrailerUrl("");
            }
            else{
                movieTrailer(movie?.name || "")
                .then((url)=>{
                    //https://www.youtube.com/watch?v=XtMThy8QKqU
                        const urlParams=new URLSearchParams(new URL(url).search);
                        setTrailerUrl(urlParams.get("v"));
                })
                .catch((error)=>console.log(error));
                
            }
        }
    

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
                {movies.map((movie)=>{
                   return(
                    
                    //4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg
                    <img 
                    key={movie.id} 
                    onClick={()=>handleClick(movie)}
                    className={`row_poster ${isLargeRow} && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>

                   )
                }
                )}
            </div>
            <Youtube videoId={trailerUrl} opts={opts}/>
        </div>
    );
}

export default Row;
