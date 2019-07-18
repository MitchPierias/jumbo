import React, { CSSProperties } from "react";

const BASE_URL = "https://image.tmdb.org/t/p/";
const FILE_SIZE = "w500";

export interface MoviePosterProps {
    imageSource:string
    position?:CSSProperties["position"]
}

export const MoviePoster:React.FC<MoviePosterProps> = (props) => (
    <div className="movie-poster" style={{position:(props.position||"initial")}}>
        <img src={BASE_URL + FILE_SIZE + props.imageSource}/>
    </div>
)