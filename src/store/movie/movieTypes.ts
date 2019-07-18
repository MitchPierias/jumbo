import { TMDBMovie } from "../../services/MovieService";
/** Add movie action type */
export const ADD_MOVIE = "ADD_MOVIE";
/** Add movies action type */
export const ADD_MOVIES = "ADD_MOVIES";
/** Delete movie action type */
export const DELETE_MOVIE = "DELETE_MOVIE";

interface AddMovieAction {
    type: typeof ADD_MOVIE
    payload: TMDBMovie
}

interface AddMoviesAction {
    type: typeof ADD_MOVIES
    payload: TMDBMovie[]
}

interface DeleteMovieAction {
    type: typeof DELETE_MOVIE
    meta: {
        id: TMDBMovie["id"]
    }
}

export type MovieActionTypes = AddMovieAction | AddMoviesAction | DeleteMovieAction;