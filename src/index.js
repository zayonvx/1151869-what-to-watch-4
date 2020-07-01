import React from "react";
import ReactDom from "react-dom";
import {App} from "./components/core";

import {moviesData} from "./mocks/films";
import {promoData} from "./mocks/promo";

ReactDom.render(
    <App promo={promoData} movies={moviesData} />,
    document.querySelector(`#root`)
);
