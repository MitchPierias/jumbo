import React from "react";
// Components
import { MoviePoster, MoviePosterProps } from "./MoviePoster";

interface MovieCardProps {
    title:string
    imageSource:MoviePosterProps["imageSource"]
    releaseDate?:number
    sentiment:number
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

/** Range of possible colors from low to high, visually represent the average reviewers sentiment */
const SENTIMENT_COLORS = ["#D1225B","#4902A3","#01d277"];

export const MovieCard:React.FC<MovieCardProps> = (props) => {

    const releaseDate = new Date(props.releaseDate||0);
    const color = SENTIMENT_COLORS[Math.floor(SENTIMENT_COLORS.length*props.sentiment)];

    const didClickCard = (event:React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        console.log("Clicked card");
    }

    return (
        <div className="movie-card" onClick={didClickCard}>
            <MoviePoster imageSource={props.imageSource}/>
            <div className="movie-card-rating" style={{backgroundColor:color}}>{Math.floor(props.sentiment*100)}%</div>
            <div className="movie-card-title">{props.title}</div>
            <div className="movie-card-subtitle">{`${MONTHS[releaseDate.getMonth()]} ${releaseDate.getFullYear()}`}</div>
        </div>
    )
}