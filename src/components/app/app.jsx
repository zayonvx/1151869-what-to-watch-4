import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {promo, movies} = props;

  return (
    <Main
      promo={promo}
      movies={movies}
      onTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  promo: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
};

export default App;
