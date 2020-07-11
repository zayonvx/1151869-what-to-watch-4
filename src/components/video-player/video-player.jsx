import React, {createRef} from 'react';
import PropTypes from 'prop-types';

export const VideoPlayer = ({src, poster, isPlaying, isMuted, height, width}) => {
  const videoRef = createRef();

  const onCanPlayThrough = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play();
    }
  };

  return (
    <div className="small-movie-card__image">
      <video
        key={isPlaying}
        poster={poster}
        src={src}
        muted={isMuted}
        height={height}
        width={width}
        ref={videoRef}
        onCanPlayThrough={onCanPlayThrough}
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool,
  isMuted: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};
