import React from "react";
// Context
import { TMDBMovie } from "./../context/MovieService";
// Components
import { MovieCard } from "./../components/Movie";

export const Movies:React.FC<{movies:TMDBMovie[]}> = (props) => {

    if (props.movies.length <= 0)
        return <div className="movie-collection">Oops... we can't find any movies with that name</div>

    return (
        <div className="movie-collection">
            {props.movies && props.movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    imageSource={movie.poster_path}
                    sentiment={movie.vote_average/10}
                />
            ))}
        </div>
    )
}