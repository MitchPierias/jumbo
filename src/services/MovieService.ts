import "isomorphic-fetch";

const API_KEY = process.env.API_KEY || "6ed12e064b90ae1290fa326ce9e790ff";

const MIN_PAGE_VALUE = 1;

export interface TMDBMovie {
    id:number
    title:string
    video:boolean
    vote_count:number
    vote_average:number
    popularity:number
    poster_path:string
    original_language:string
    original_title:string
    genre_ids:number[],
    backdrop_path:string,
    adult:boolean
    overview:string
    release_date:string
}

interface TMDBResponse {
    results:TMDBMovie[]
}

export const getAllMovies = (page:number=MIN_PAGE_VALUE):Promise<TMDBMovie[]> => {

    if (page < MIN_PAGE_VALUE) page = 1;

    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en&page=${page}`)
    .then<TMDBResponse>(response => response.json())
    .then<TMDBMovie[]>(packet => packet.results);
}

export const searchMovies = (query:string):Promise<TMDBMovie[]> => {

    return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`)
    .then<TMDBResponse>(response => response.json())
    .then<TMDBMovie[]>(packet => packet.results);
}