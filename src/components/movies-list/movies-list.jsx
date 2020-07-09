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
              onCardMouseEnter={(card) => {
                if (card) {
                  this.timerOnHoverID = setTimeout(() => this.setState({
                    hoverMovieID: card
                  }), VIDEO.delay);
                }
              }}
              onCardMouseLeave={() => {
                if (this.timerOnHoverID) {
                  clearTimeout(this.timerOnHoverID);
                } this.setState({hoverMovieID: null});
              }}
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
