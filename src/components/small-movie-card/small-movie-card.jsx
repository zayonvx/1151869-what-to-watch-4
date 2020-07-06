import React from 'react';
import PropTypes from 'prop-types';
import {movieTypes} from '../types';

export const SmallMovieCard = ({movie, onTitleClick, onCardHover}) => {

  const onArticleMouseClick = (evt) => {
    onTitleClick(evt.currentTarget.dataset.id);
  };

  const onLinkMouseClick = (evt) => {
    evt.preventDefault();
    onTitleClick(evt.currentTarget.dataset.id);
  };

  return (<>
    <article className="small-movie-card catalog__movies-card"
      data-id={movie.id}
      onClick={onArticleMouseClick}
      onMouseOver={onCardHover}
    >
      <div className="small-movie-card__image">
        <img src={movie.image} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onLinkMouseClick}>{movie.title}</a>
      </h3>
    </article>
  </>);
};

SmallMovieCard.propTypes = {
  movie: movieTypes.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};
