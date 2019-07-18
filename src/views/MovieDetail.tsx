import React from "react";
// Context
import { TMDBMovie } from "../services/MovieService";
// Components
import { MoviePoster } from "./../components/Movie";

interface MovieDetailProps {
    movie:TMDBMovie
    onCancel: (event:React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * TMDB image resource base url
 */
const BASE_URL = "https://image.tmdb.org/t/p/";

/**
 * TMDB image resource file size
 */
const FILE_SIZE = "w500";

export const MovieDetail:React.FC<MovieDetailProps> = (props) => (
    <div style={{position:"fixed",top:"0px",left:"0px",zIndex:10000,backgroundColor:"#081B23",height:"100vh"}}>
        <div style={{position:"relative",overflow:"hidden"}}>
            <div style={{height:"244px",width:"100%",zIndex:-1000,position:"absolute"}}>
                <img src={BASE_URL + FILE_SIZE + props.movie.backdrop_path} style={{height:"auto",width:"100%",zIndex:1}}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",zIndex:100}}>
                <div style={{padding:"35.13px 24px"}}>
                    <button onClick={props.onCancel}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18 8.34868V10.6513H4.31579L10.5789 17.2303L9 18.875L0 9.5L9 0.125L10.6316 1.76974L4.31579 8.34868H18Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <div style={{padding:"20px",marginTop:"19vmin",display:"flex",flexDirection:"row",alignItems:"flex-end",backgroundColor:"#081B23",flexGrow:12,width:"100%",position:"relative"}}>
                    <MoviePoster imageSource={props.movie.poster_path} position="absolute"/>
                    <div style={{padding:"20px 20px 20px 160px"}}>
                        <h1>{props.movie.title}</h1>
                        <div style={{lineHeight:"21px"}}>2018 * {Math.floor(props.movie.vote_average/10*100)}% User Score</div>
                        <div style={{lineHeight:"21px"}}>2h 15min</div>
                    </div>
                </div>
            </div>
        </div>
        <hr style={{margin:"5px 21px",outline:"none",border:"1px solid #0F303D",boxSizing:"border-box"}}/>
        <div style={{padding:"21px"}}>
            <h2>Overview</h2>
            <p>{props.movie.overview}</p>
        </div>
    </div>
)