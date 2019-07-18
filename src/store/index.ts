import { combineReducers, createStore } from "redux";
// Reducers
import movies from './movie/movieReducer';

/** 
 * Combined application reducers
 * @author Mitch Pierias <github.com/MitchPieras>
 */
const rootReducer = combineReducers({
  movies
});

/** @hidden Combined application state type definition */
export type AppState = ReturnType<typeof rootReducer>

/** Creates the final store with combined reducers */
export default createStore(rootReducer);