import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Cart.css';

function Cart() {
  return (
    <div className="cart">
      <div className="cart__left">
        {/* <img
          className="cart__left__image"
          src="banner.jpg"
          alt="banner"
        /> */}
        <h1 className="cart__hero">Your Shopping Cart</h1>
      </div>
      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
