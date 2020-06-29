import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";
import {moviesData} from "../../mocks/films";

it(`SmallMovieCard is rendered`, () => {
  const tree = renderer
    .create(
        <SmallMovieCard
          title={moviesData[0].title}
          image={moviesData[0].image}
          onTitleClick={() => {}}
          onHover={() => {}}
          index={0}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
