import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {movieTypes} from '../types';
import {VideoPlayer} from '../core';
import {VIDEO} from '../const';

export class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };
  }

  render() {

    const {movie, onCardMouseEnter, onCardMouseLeave, onTitleClick} = this.props;

    const handlerMouseClick = (evt) => {
      onTitleClick(evt.currentTarget.dataset.id);
    };

    const handlerMouseEnter = () => {
      onCardMouseEnter(movie);
      this.setState({
        isPlaying: true,
      });
    };

    const handlerMouseLeave = () => {
      onCardMouseLeave();
      this.setState({
        isPlaying: false,
      });
    };

    return (<>
      <article className="small-movie-card catalog__movies-card"
        data-id={movie.id}
        onClick={handlerMouseClick}
        onMouseEnter={handlerMouseEnter}
        onMouseLeave={handlerMouseLeave}
      >
        <VideoPlayer
          movie={movie}
          isPlaying={this.state.isPlaying}
          isMuted={VIDEO.isMute}
          width={VIDEO.width}
          height={VIDEO.height}
        />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={handlerMouseClick}>{movie.title}</a>
        </h3>
      </article>
    </>);

  }
}


SmallMovieCard.propTypes = {
  movie: movieTypes.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func,
  onCardMouseLeave: PropTypes.func,
  isPlaying: PropTypes.bool,
};
