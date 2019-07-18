import { MovieActionTypes, ADD_MOVIE, ADD_MOVIES } from "./movieTypes";
import { TMDBMovie } from "../../services/MovieService";

export type MoviesState = TMDBMovie[];

const initialState:MoviesState = [];

export default (
    state:MoviesState = initialState,
    action:MovieActionTypes
):MoviesState => {
    switch (action.type) {
        case ADD_MOVIE:
            return [...state, action.payload]
        case ADD_MOVIES:
            return [...state, ...action.payload];
        default:
            throw new Error(`Unknown action type '${action.type}'`);
    }
}