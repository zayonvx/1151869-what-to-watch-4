import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

import {TypesData} from '../types';

const App = ({promo, movies}) => {

  return (
    <Main
      promo={promo}
      movies={movies}
      onTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  promo: TypesData.PROMO,
  movies: PropTypes.arrayOf(TypesData.MOVIE).isRequired,
};

export default App;
