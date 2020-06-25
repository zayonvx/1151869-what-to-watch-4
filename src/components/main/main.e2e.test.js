import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

import {promoData} from '../../mocks/promo';
import {moviesData} from '../../mocks/films';

Enzyme.configure({
  adapter: new Adapter()
});

it(`Card title should be clicked`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main
        promoTitle={`Bohemian Rhapsody`}
        promoReleaseDate={2018}
        promoGenre={`Drama`}
        promoPoster={promoData.poster}
        promoPosterAlt={promoData.posterAlt}
        promoBackground={promoData.background}
        movies={moviesData}
        onTitleClick={() => {}}
      />
  );

  const cardLink = main.find(`a.small-movie-card__link`);

  cardLink.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onTitleClick.mock.calls.length).toBe(cardLink.length);
});
