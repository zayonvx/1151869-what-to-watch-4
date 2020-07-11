import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {SmallMovieCard} from '../core';
import {movieTypes} from '../types';
import {VIDEO} from '../const';
export class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hoverMovieId: null,
    };

    this.timerOnHoverID = null;

    this._onCardMouseEnter = this._onCardMouseEnter.bind(this);
    this._onCardMouseLeave = this._onCardMouseLeave.bind(this);

  }

  _onCardMouseEnter(card) {
    if (card) {
      this.timerOnHoverID = setTimeout(() => this.setState({
        hoverMovieID: card
      }), VIDEO.delay);
    }
  }

  _onCardMouseLeave() {
    if (this.timerOnHoverID) {
      clearTimeout(this.timerOnHoverID);
    } this.setState({hoverMovieID: null});
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
              onCardMouseEnter={this._onCardMouseEnter}
              onCardMouseLeave={this._onCardMouseLeave}
              isPlaying={this.state.hoverMovieID === movie.id}
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
