/* eslint-disable react/prop-types */
import React from 'react';
import './Product.css';

export default function Product({
  title, price, imageLink, rating,
}) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{ title }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{ price }</strong>
        </p>
      </div>

      <img src={imageLink} alt="book" />

      <div className="product__rating">
        {Array(rating).fill().map(() => (
          <p>⭐</p>
        ))}
      </div>

      <button className="product__button" type="button">Add to Cart</button>
    </div>
  );
}
