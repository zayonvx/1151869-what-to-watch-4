import React from 'react';
import {Main} from '../core';
import PropTypes from 'prop-types';

import {promoTypes, movieTypes} from '../types';

export const App = ({promo, movies}) => {

  return (
    <Main
      promo={promo}
      movies={movies}
      onTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  promo: promoTypes.isRequired,
  movies: PropTypes.arrayOf(movieTypes).isRequired,
};
