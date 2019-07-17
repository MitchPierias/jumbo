import React from "react";
// Context
import { TMDBMovie } from "./../context/MovieService";
// Components
import { MoviePoster } from "./../components/Movie";

interface MovieDetailProps {
    movie:TMDBMovie
}

const BASE_URL = "https://image.tmdb.org/t/p/";
const FILE_SIZE = "w500";

export const MovieDetail:React.FC<MovieDetailProps> = (props) => {

    return (
        <div>
            <div style={{height:"100px"}}>
                <img src={BASE_URL + FILE_SIZE + props.movie.backdrop_path} style={{height:"auto",width:"100%"}}/>
            </div>
            <div style={{padding:"20px",display:"flex",flexDirection:"row"}}>
                <MoviePoster imageSource={props.movie.poster_path}/>
                <div style={{padding:"20px"}}>
                    <h1>{props.movie.title}</h1>
                    <div>2018 * {Math.floor(props.movie.vote_average/10*100)}% User Score</div>
                    <div>2h 15min</div>
                </div>
            </div>
            <hr/>
            <div style={{padding:"21px"}}>
                <h2>Overview</h2>
                <p>{props.movie.overview}</p>
            </div>
        </div>
    )
}