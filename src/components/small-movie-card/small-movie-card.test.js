import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card";
import {moviesData} from "../../mocks/films";

it(`SmallMovieCard is rendered`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          movie={moviesData[0]}
          onTitleClick={() => {}}
          onHover={() => {}}
          index={0}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
