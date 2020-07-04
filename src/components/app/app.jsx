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

    this._handlerTitleClick = this._handlerTitleClick.bind(this);

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

  _renderMain() {
    const {promo, movies} = this.props;
    const {selectedMovie} = this.state;

    if (selectedMovie) {
      return this._renderMoviePage();
    } else {
      return (
        <Main
          promo={promo}
          movies={movies}
          onTitleClick={this._handlerTitleClick}
        />
      );
    }
  }

  _renderMoviePage() {
    return (
      <MoviePage
        movie = {this.props.movies[0]}
      />
    );
  }

  _handlerTitleClick(movie) {
    this.setState({selectedMovie: movie});
  }
}

App.propTypes = {
  promo: promoTypes.isRequired,
  movies: PropTypes.arrayOf(movieTypes).isRequired,
};
