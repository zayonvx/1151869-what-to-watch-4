import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

import {MOVIE_NAMES, promoData} from '../../utils/consts';

it(`Test Main`, () =>{
  const tree = renderer.create(
      <Main
        promoTitle={promoData.title}
        promoGenre={promoData.genre}
        promoReleaseDate={promoData.releaseDate}
        movieNames={MOVIE_NAMES}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
