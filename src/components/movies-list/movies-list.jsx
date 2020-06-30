import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import {TypesData} from '../types';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {index: null};

    this._handleHover = this._handleHover.bind(this);
  }

  _handleHover(value) {
    this.setState({index: value});
  }

  render() {
    const {movies, onTitleClick} = this.props;

    return (
      movies.map((movie, index) =>
        <SmallMovieCard
          movie={movie}
          index={index}
          onTitleClick={onTitleClick}
          onHover={this._handleHover}
          key={movie.title + index}
        />
      )
    );
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(TypesData.MOVIE).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
