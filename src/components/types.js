import PropTypes from "prop-types";

const promoTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  posterAlt: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
});

const movieTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  posterAlt: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingLevel: PropTypes.string.isRequired,
  ratingCount: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
});

export {promoTypes, movieTypes};
