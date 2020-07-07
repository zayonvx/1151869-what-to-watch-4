import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Main} from "./main";

import {promoData} from "../../mocks/promo";
import {moviesData} from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Card title should be clicked`, () => {
  const onTitleClick = jest.fn();

  const main = shallow(
      <Main promo={promoData} movies={moviesData} onTitleClick={onTitleClick}/>
  );

  const cardLink = main.find(`a.small-movie-card__link`);

  cardLink.forEach((link) => {
    link.simulate(`click`);
  });

  expect(onTitleClick.mock.calls.length).toBe(cardLink.length);
});
