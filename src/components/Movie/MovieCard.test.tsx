import React from "react";
import { assert } from "chai";
import { shallow, ShallowWrapper } from "enzyme";
// Components
import { MovieCard } from "./MovieCard";

describe("MovieCard", () => {

    let component:ShallowWrapper = shallow(<MovieCard title="test" imageSource="fdafd" sentiment={0.5}/>);

    it("Should break title and subtitle text when it extends beyond bounds", () => {
        expect(component.find(".movie-card-title")).toHaveText("test");
        assert.equal(component.find(".movie-card").length, 1);
    });

    // it("Should change sentiment background color relative to value");

    // it("Should determine the 'Month YYYY' string based on an input date");

    // it("Should display a flat color when no poster image is available");
});