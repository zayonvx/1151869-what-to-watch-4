import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SmallMovieCard} from '../core';
import {movieTypes} from '../types';
export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoveredCard: null,
    };
  }

  _onCardMouseEnter(card) {
    this.setState({
      hoveredCard: card,
    });
  }

  _onCardMouseLeave() {
    this.setState({
      hoveredCard: null,
    });
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
              onCardMouseEnter={(card) => this._onCardMouseEnter(card)}
              onCardMouseLeave={() => this._onCardMouseLeave()}
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
};
