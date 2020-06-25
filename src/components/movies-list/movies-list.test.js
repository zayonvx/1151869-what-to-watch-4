import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import {moviesData} from '../../mocks/films';

it(`MoviesList is rendered`, () => {
  const tree = renderer.create(
      <MoviesList
        movies={moviesData}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

