import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';

import {moviesData} from './mocks/films';
import {promoData} from './mocks/promo';

ReactDom.render(
    <App
      promoTitle = {promoData.title}
      promoGenre = {promoData.genre}
      promoReleaseDate = {promoData.releaseDate}
      promoBackground = {promoData.background}
      promoPoster = {promoData.poster}
      promoPosterAlt = {promoData.posterAlt}
      movies = {moviesData}
    />,
    document.querySelector(`#root`)
);
