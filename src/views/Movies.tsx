import React, { useState } from "react";
// Context
import { TMDBMovie } from "../services/MovieService";
// Components
import { MovieCard } from "./../components/Movie";

interface MoviesProps {
    movies:TMDBMovie[]
    onSelectMovie: (id:number) => void
}

export const Movies:React.FC<MoviesProps> = (props) => {

    if (props.movies.length <= 0)
        return <div className="movie-collection">Oops... we can't find any movies with that name</div>

    return (
        <div className="movie-collection">
            {props.movies && props.movies.map((movie, idx) => (
                <MovieCard
                    key={movie.id}
                    id={idx}
                    title={movie.title}
                    imageSource={movie.poster_path}
                    sentiment={movie.vote_average/10}
                    releaseDate={movie.release_date}
                    onSelect={props.onSelectMovie}
                />
            ))}
        </div>
    )
}