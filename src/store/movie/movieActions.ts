import {
    ADD_MOVIE
} from "./movieTypes";

import { TMDBMovie } from "../../context/MovieService";

export const addMovie = (newMovie:TMDBMovie) => {
    return {
        type:ADD_MOVIE,
        payload: newMovie
    }
}