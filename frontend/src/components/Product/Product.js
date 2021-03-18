import React from 'react';
import './Product.css';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function Product({
  title, price, imageLink, rating,
}) {
  return (
    <div className="product">
      <img src={imageLink} alt="book" />

      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          {price}
          {' '}
          <small>USD</small>
        </p>
      </div>
      <div className="product__rating">
        {Array(rating).fill().map(() => (
          <p>⭐</p>
        ))}
      </div>

      <Button variant="contained" color="primary"> Add to Cart </Button>
    </div>
  );
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
