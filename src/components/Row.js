import React, { useState, useEffect } from 'react';
import "../CSS/Row.css";
import axios from '../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
        
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player/_parameters
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch(err => console.log(err.message))
        }
    }


    return (
        <div className="row">
            <h2>{title}</h2>


            <div className="row__posters">
                {movies.map(
                    (movie, i) => (
                         <div className="row__postersContainer" key={i}>
                            <img 
                                className={`row__poster ${isLargeRow && "row__posterLarge"}`} 
                                onClick= {() => handleClick(movie)}
                                key={movie.id} 
                                src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path }`} 
                                alt="movie.name"
                            />
                             <small>{movie?.title || movie?.name || movie?.original_name}</small>

                         </div>
                    
                    )
                )}
            </div>
            
            {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
