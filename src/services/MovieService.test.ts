import "mocha";
import { assert } from "chai";
// API Service Library
import {
    getAllMovies,
    searchMovies
} from "./MovieService";

describe("API Service", () => {

    context("List movies", () => {

        it("Should fetch a list of movies", async () => {
            return getAllMovies().then(response => {
                assert.isArray(response, "Response should be an array");
                assert.isAtLeast(response.length, 20, "Movie list should contain at least 20 movies")
            });
        }).timeout(3000);

        it("Should fetch the next page of movies", async () => {
            return getAllMovies(2).then(response => {
                assert.isArray(response, "Response should be an array");
                assert.isAtLeast(response.length, 20, "Movie list should contain at least 20 movies")
            })
        }).timeout(3000);

        it("Should handle invalid page values", () => {
            return getAllMovies(-1).then(response => {
                assert.isArray(response, "Response should be an array");
                assert.isAtLeast(response.length, 20, "Movie list should contain at least 20 movies")
            });
        }).timeout(3000);
    });

    context("Search Movies", () => {

        it("Should return search results", () => {
            return searchMovies("test").then(movies => {
                assert.isArray(movies, "Movies should be an array");
                assert.isAtLeast(movies.length, 1, "At least one movie result should be returned");
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