import React from 'react';
import ReactDom from 'react-dom';

import App from './components/app/app.jsx';

const init = () => {
  const promo = {
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseDate: 2014,
  };

  ReactDom.render(
      <App
        promoTitle = {promo.title}
        promoGenre = {promo.genre}
        promoReleaseDate = {promo.releaseDate}
      />,
      document.querySelector(`#root`)
  );
};

init();
