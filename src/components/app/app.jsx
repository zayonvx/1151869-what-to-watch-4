import React, {PureComponent} from 'react';
import {Main, MoviePage} from '../core';
import PropTypes from 'prop-types';

import {promoTypes, movieTypes} from '../types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovie: null
    };

  }

  _renderMain() {
    const {promo, movies} = this.props;
    const {selectedMovie} = this.state;

    if (selectedMovie) {
      return this._renderMoviePage();
    }
    return (
      <Main
        promo={promo}
        movies={movies}
        onTitleClick={(movie) => {
          this.setState({selectedMovie: movie});
        }}
      />
    );
  }

  _renderMoviePage() {
    return (
      <MoviePage
        movie = {this.props.movies[0]}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/movie-page">
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promo: promoTypes.isRequired,
  movies: PropTypes.arrayOf(movieTypes).isRequired,
};
