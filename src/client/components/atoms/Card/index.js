import React, { memo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const Card = memo(({ details: { title, image }, readMore }) => {
  return (
    <div className="col s12 m6 l6 xl4">
      <div className="card large">
        {image ? (
          <div className="card-image">
            <LazyLoadImage alt={title} src={image} />
          </div>
        ) : null}
        <div className="card-content">
          <span className="card-title">{title}</span>
        </div>
        {readMore ? (
          <div className="card-action">
            <span onClick={readMore}>Read More</span>
          </div>
        ) : null}
      </div>
    </div>
  );
});

Card.defaultProps = {
  readMore: null,
  details: {
    title: 'No title available'
  }
};

Card.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string
  }),
  readMore: PropTypes.func
};

export default Card;
