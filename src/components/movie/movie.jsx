import React from 'react';
import PropTypes from 'prop-types';

const Movie = (props) => {
  const {title, src, link} = props;

  return <React.Fragment>

    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button">Play</button>
      <div className="small-movie-card__image">
        <img src={src} alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={link}>{title}</a>
      </h3>
    </article>

  </React.Fragment>;
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Movie;
