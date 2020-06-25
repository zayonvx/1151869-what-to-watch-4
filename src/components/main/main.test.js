import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

import {moviesData} from '../../mocks/films';
import {promoData} from '../../mocks/promo';

it(`Test Main`, () =>{
  const tree = renderer.create(
      <Main
        promoTitle={promoData.title}
        promoGenre={promoData.genre}
        promoReleaseDate={promoData.releaseDate}
        promoPoster={promoData.poster}
        promoPosterAlt={promoData.posterAlt}
        promoBackground={promoData.background}
        movies={moviesData}
        onTitleClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
