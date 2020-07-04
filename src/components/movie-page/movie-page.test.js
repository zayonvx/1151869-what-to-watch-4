import React from "react";
import {MoviePage} from "./movie-page";
import renderer from "react-test-renderer";
import {moviesData} from "../../mocks/films";

it(`Test MoviePage`, () => {
  const tree = renderer
    .create(
        <MoviePage movie={moviesData[0]}/>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
