import {
    ADD_MOVIE
} from "./movieTypes";

import { TMDBMovie } from "../../services/MovieService";

export const addMovie = (newMovie:TMDBMovie) => {
    return {
        type:ADD_MOVIE,
        payload: newMovie
    }
}