import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {promoTitle, promoGenre, promoReleaseDate} = props;

  return <Main
    promoTitle={promoTitle}
    promoGenre={promoGenre}
    promoReleaseDate={promoReleaseDate}
  />;
};

export default App;
