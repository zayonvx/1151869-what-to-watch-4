import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';
import {MOVIE_NAMES, titleHandler} from '../../utils/consts';

const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate, movieNames} = props;

  return <Main
    promoTitle={promoTitle}
    promoGenre={promoGenre}
    promoReleaseDate={promoReleaseDate}
    movieNames={movieNames}
    onTitleClick={titleHandler}
  />;
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  promoGenre: PropTypes.string.isRequired,
  movieNames: PropTypes.arrayOf(PropTypes.oneOf(MOVIE_NAMES)).isRequired,
};

export default App;
