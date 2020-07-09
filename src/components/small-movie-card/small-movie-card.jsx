import React from 'react';
import PropTypes from 'prop-types';
import {movieTypes} from '../types';
import {VideoPlayer} from '../core';
import {VIDEO} from '../const';

export const SmallMovieCard = ({movie, onTitleClick, onCardMouseEnter, onCardMouseLeave, isPlaying}) => {

  const onArticleMouseClick = (evt) => {
    onTitleClick(evt.currentTarget.dataset.id);
  };

  const onLinkMouseClick = (evt) => {
    evt.preventDefault();
    onTitleClick(evt.currentTarget.dataset.id);
  };

  const handleCardMouseEnter = () => {
    onCardMouseEnter(movie.id);
  };

  return (<>
    <article className="small-movie-card catalog__movies-card"
      data-id={movie.id}
      onClick={onArticleMouseClick}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      <VideoPlayer
        isPlaying={isPlaying}
        isMuted={VIDEO.isMute}
        src={movie.preview}
        poster={movie.image}
        width={VIDEO.width}
        height={VIDEO.height}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={onLinkMouseClick}>{movie.title}</a>
      </h3>
    </article>
  </>);
};

SmallMovieCard.propTypes = {
  movie: movieTypes.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  isPlaying: PropTypes.bool,
};
