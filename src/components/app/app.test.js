import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

import {moviesData} from '../../mocks/films.js';
import {promoData} from '../../mocks/promo.js';

it(`Test App`, () => {
  const tree = renderer.create(
      <App
        promo={promoData}
        movies={moviesData}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
