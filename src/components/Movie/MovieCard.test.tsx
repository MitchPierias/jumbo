import "jest-enzyme";
import React from "react";
import { assert } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
// Components
import { MovieCard } from "./MovieCard";

describe("MovieCard", () => {

    let component:ShallowWrapper = shallow(<MovieCard id={0} title="test" imageSource="fdafd" sentiment={0.5} releaseDate="" onSelect={() => {}}/>);

    test("Renders a basic MovieCard component", () => {
        expect(component.find(".movie-card-title")).toHaveText("test");
        assert.equal(component.find(".movie-card").length, 1);
    });

    // test("Should break title and subtitle text when it extends beyond bounds");

    // test("Should change sentiment background color relative to value");

    // test("Should determine the 'Month YYYY' string based on an input date");

    // test("Should display a flat color when no poster image is available");
});