import { assert } from "chai";
// API Service Library
import {
    getAllMovies,
    searchMovies
} from "./MovieService";

describe("API Service", () => {

    context("List movies", () => {

        it("Should return a list of all movies", async () => {

            return getAllMovies().then(response => {
                // console.log(response)
                assert.isArray(response);
            });
        }).timeout(3000);

        it("Should return the next page of movies");

        it("Should return a filtered list of movies");
    });

    context("Search Movies", () => {

        it("Should return search results", () => {

            return searchMovies("test").then(movies => {
                // console.log(movies);
                assert.isArray(movies);
                assert.isString(movies[0].title);
            });
        }).timeout(3000);

        it("Should fail to return search results", () => {
            return searchMovies("bed3a7d7a00f642e447986db268e6118").then(movies => {
                assert.isArray(movies);
                assert.isAtMost(movies.length, 0);
            });
        }).timeout(4000);
    });
});