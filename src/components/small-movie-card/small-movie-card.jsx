import React from 'react';
import PropTypes from 'prop-types';
import {TypesData} from '../types';

const SmallMovieCard = ({movie, onTitleClick, onHover, index}) => {

  return (<>
    <article className="small-movie-card catalog__movies-card"
      onClick={onTitleClick}
      onMouseOver={() => {
        onHover(index);
      }
      }
    >
      <div className="small-movie-card__image">
        <img src={movie.image} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onTitleClick}>{movie.title}</a>
      </h3>
    </article>
  </>);
};

SmallMovieCard.propTypes = {
  movie: TypesData.MOVIE,
  onTitleClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SmallMovieCard;
