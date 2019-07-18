import React, { useState, useEffect, useReducer } from "react";
import { getAllMovies, TMDBMovie, searchMovies } from "./services/MovieService";
import { listen } from "popmotion";
// Views
import { Movies } from "./views/Movies";
import { MovieDetail } from "./views/MovieDetail";
import movieReducer from "./store/movie/movieReducer";
import { ADD_MOVIES } from "./store/movie/movieTypes";
// Components
import { Header } from "./components/Header/Header";

/**
 * Number of movie items returned
 * @note This is fixed based on TMDB's API
 * and presumes page traversal will never
 * return a different number of results, like
 * on the last page.
 * @author Mitch Pierias <github.com/MitchPierias>
 */
const BATCH_SIZE = 20;

/**
 * Milliseconds to withhold executing a search query
 * @author Mitch Pierias <github.com/MitchPierias>
 */
const SEARCH_DELAY = 300;

export const Test:React.FC<{}> = () => {

    /**
     * Maintains a reference to the current
     * query timer is one exists.
     * @author Mitch Pierias <github.com/MitchPierias>
     */
    let searchDelay:NodeJS.Timeout;

    /**
     * Stores the currently visible page index.
     * @author Mitch Pierias <github.com/MitchPierias>
     */
    const [ page, setPage ] = useState<number>(1);

    /**
     * Manages the movies store and action/reducer dispatch.
     * @author Mitch Pierias <github.com/MitchPierias>
     */
    const [ movies, dispatch ] = useReducer(movieReducer, []);

    /**
     * Stores search query results for the temporary display.
     * @author Mitch Pierias <github.com/MitchPierias>
     */
    const [ results, setResults ] = useState<TMDBMovie[]>();

    /**
     * Triggered on every page change to determine if
     * the movie store requires additional data, then
     * request additional movies and updates cache.
     * @author Mitch Pierias <github.com/MitchPierias>
     */
    useEffect(() => {
        // Skip calling the API if the requested range is cached
        if (page*BATCH_SIZE <= movies.length) return;
        // Fetch movies at page and cache results
        getAllMovies(page).then(results => {
            dispatch({ type:ADD_MOVIES, payload:results });
        });
    }, [page]);

    /**
     * Manages search queries and results for the user's
     * search input
     * @author Mitch Pierias <github.com/MitchPierias>
     * @param event Input value change event
     */
    const didChangeSearchField = (event:React.ChangeEvent<HTMLInputElement>) => {
        // Clear existing search delay
        if (searchDelay) clearTimeout(searchDelay);
        // Extract query value and handle search
        const query = event.target.value;
        if (query === "") return setResults(undefined);
        // Compose delayed search query
        searchDelay = global.setTimeout(() => searchMovies(query).then(setResults), SEARCH_DELAY);
    }

    /**
     * Listens to the scroll position for an 'end-of-page' type
     * event, then triggers a pagination type page update.
     * @note Probably needs some browser compatability testing to
     * ensure the values use to determine scroll position and window
     * size remain consistent.
     * @author Mitch Pierias <github.com/MitchPierias>
     */
    listen(window, 'scroll').start(() => {
        // Capture scroll position and scroll bounds
        const endScrollPosition = document.body.scrollHeight;
        const scrollPosition = window.scrollY + document.body.clientHeight;
        // Escape if scroll within bounds else increment page
        if (scrollPosition < endScrollPosition) return;
        setPage(page+1);
    })

    return (
        <div style={{width:"100vw",maxWidth:"1000px"}}>
            {/* <Header didChangeSearchField={didChangeSearchField}/>
            <div className="heading" style={{padding:"0px 17px"}}>Popular Movies</div>
            <Movies movies={results||movies||[]}/> */}
            <MovieDetail
                onCancel={(event) => {
                    console.log("Clicked back")
                }}
                movie={{
                    title:"Spider Man",
                    poster_path:"/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
                    id:429617,
                    video:false,
                    vote_count:1785,
                    vote_average:4.44,
                    popularity:461.454,
                    original_language:"en",
                    original_title:"Spider-Man: Far from Home",
                    genre_ids:[28,12,878],
                    backdrop_path:"/dihW2yTsvQlust7mSuAqJDtqW7k.jpg",
                    adult:false,
                    overview:"Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
                    release_date:"2019-06-28",
                }}
            />
        </div>
    )
}