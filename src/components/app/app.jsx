import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate, promoBackground, promoPoster, promoPosterAlt, movies} = props;

  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
      promoBackground={promoBackground}
      promoPoster={promoPoster}
      promoPosterAlt={promoPosterAlt}
      movies={movies}
      onTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  promoBackground: PropTypes.string.isRequired,
  promoPoster: PropTypes.string.isRequired,
  promoPosterAlt: PropTypes.string.isRequired,
  movies: PropTypes.array.isRequired,
};

export default App;
