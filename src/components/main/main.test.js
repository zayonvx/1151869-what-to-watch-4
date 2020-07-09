import React from "react";
import {Main} from "./main";
import renderer from "react-test-renderer";

import {moviesData} from "../../mocks/films";
import {promoData} from "../../mocks/promo";
import {onTitleClick} from "../const";

it(`Test Main`, () => {
  const tree = renderer
  .create(
      <Main promo={promoData} movies={moviesData} onTitleClick={onTitleClick} />
  )
  .toJSON();

  expect(tree).toMatchSnapshot();
});
