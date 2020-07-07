import React from "react";
import {App} from "./app";
import renderer from "react-test-renderer";

import {moviesData} from "../../mocks/films";
import {promoData} from "../../mocks/promo";
import {onTitleClick} from "../const";

it(`Test App`, () => {
  const tree = renderer
    .create(<App promo={promoData} movies={moviesData} onTitleClick={onTitleClick}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
