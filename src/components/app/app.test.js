import React from "react";
import App from "./app";
import renderer from "react-test-renderer";

import {moviesData} from "../../mocks/films";
import {promoData} from "../../mocks/promo";

it(`Test App`, () => {
  const tree = renderer
    .create(<App promo={promoData} movies={moviesData} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
