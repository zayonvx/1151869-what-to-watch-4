import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

import {MOVIE_NAMES, promoData} from '../../utils/consts';

it(`Test Main`, () => {
  const tree = renderer.create(
      <App
        promoTitle={promoData.title}
        promoGenre={promoData.genre}
        promoReleaseDate={promoData.releaseDate}
        movieNames={MOVIE_NAMES}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
