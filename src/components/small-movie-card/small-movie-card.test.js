import React from "react";
import renderer from "react-test-renderer";
import {SmallMovieCard} from "./small-movie-card";
import {moviesData} from "../../mocks/films";
import {onTitleClick, onCardHover} from "../const";

it(`SmallMovieCard is rendered`, () => {
  const tree = renderer
  .create(
      <SmallMovieCard
        movie={moviesData[0]}
        onTitleClick={onTitleClick}
        onCardHover={onCardHover}
      />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
