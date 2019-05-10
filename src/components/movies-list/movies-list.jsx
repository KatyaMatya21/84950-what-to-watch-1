import React from 'react';
import PropTypes from 'prop-types';

import Movie from '../movie/movie.jsx';

const MoviesList = ({items}) => {
  return <React.Fragment>

    <div className="catalog__movies-list">
      {items.map((item, i) => {
        return (
          <Movie
            title={item.title}
            src={item.src}
            link={item.link}
            key={i}
          />
        );
      })}
    </div>

  </React.Fragment>;
};

MoviesList.propTypes = {
  items: PropTypes.array.isRequired
};

export default MoviesList;