import React from "react";

const BASE_URL = "https://image.tmdb.org/t/p/";
const FILE_SIZE = "w500";

export interface MoviePosterProps {
    imageSource:string
}

export const MoviePoster:React.FC<MoviePosterProps> = (props) => (
    <div className="movie-poster">
        <img src={BASE_URL + FILE_SIZE + props.imageSource}/>
    </div>
)