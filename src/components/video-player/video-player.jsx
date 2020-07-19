import React, {createRef, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {VIDEO} from '../const';
import {movieTypes} from '../types';

export class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this._timeout = null;
  }


  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      this._timeout = setTimeout(() => video.play(), VIDEO.delay);
    } else {
      clearTimeout(this._timeout);
      video.load();
    }
  }

  render() {
    const {movie, width, height} = this.props;
    return (
      <div className="small-movie-card__image">
        <video
          src={movie.preview}
          poster={movie.image}
          width={width}
          height={height}
          ref={this._videoRef}
          muted={this.props.isMuted}
        />
      </div>

    );
  }
}

VideoPlayer.propTypes = {
  movie: movieTypes.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
};
