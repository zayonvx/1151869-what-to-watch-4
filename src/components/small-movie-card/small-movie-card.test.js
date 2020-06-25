import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card.jsx';

const mocks = {
  title: `Shutter Island`,
  image: `img/the-grand-budapest-hotel-poster.jpg`,
};

it(`SmallMovieCard is rendered`, () => {
  const tree = renderer.create(
      <SmallMovieCard
        title = {mocks.title}
        image = {mocks.image}
        onTitleClick = {() => {}}
        onHover = {() => {}}
        index = {0}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
