import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SmallMovieCard} from '../core';
import {movieTypes} from '../types';
export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onTitleClick} = this.props;
    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <SmallMovieCard
              key={movie.id}
              movie={movie}
              onTitleClick={onTitleClick}
              onCardHover={() => {}}
            />
          );
        })
        }
      </div>
    );
  }
}


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(movieTypes).isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardHover: PropTypes.func.isRequired,
};
