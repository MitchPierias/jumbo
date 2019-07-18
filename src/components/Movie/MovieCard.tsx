import React from "react";
// Components
import { MoviePoster, MoviePosterProps } from "./MoviePoster";

interface MovieCardProps {
    id:number
    title:string
    imageSource:MoviePosterProps["imageSource"]
    releaseDate:string
    sentiment:number
    onSelect: (id:number) => void
}

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

/** Range of possible colors from low to high, visually represent the average reviewers sentiment */
const SENTIMENT_COLORS = ["#D1225B","#4902A3","#01d277"];

export const MovieCard:React.FC<MovieCardProps> = (props) => {

    /**
     * Movies release date
     */
    const releaseDate = new Date(props.releaseDate);

    /**
     * Visual color representation of sentiment
     */
    const color = SENTIMENT_COLORS[Math.floor(SENTIMENT_COLORS.length*props.sentiment)];

    const didSelectCard = (event:React.MouseEvent<HTMLDivElement>) => {
        if (!props.onSelect) return;
        props.onSelect(props.id);
    }

    return (
        <div className="movie-card" onClick={didSelectCard}>
            <MoviePoster imageSource={props.imageSource}/>
            <div className="movie-card-rating" style={{backgroundColor:color}}>{Math.floor(props.sentiment*100)}%</div>
            <div className="movie-card-title">{props.title}</div>
            <div className="movie-card-subtitle">{`${MONTHS[releaseDate.getMonth()]} ${releaseDate.getFullYear()}`}</div>
        </div>
    )
}