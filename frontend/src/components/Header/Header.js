import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

export default function Header() {
  return (
    <div>
      <div>
        <div className="header">
          <img className="header__logo" src="/logo.png" alt="Logo" />

          <div className="header__search">
            <input className="header__searchInput" />
            <SearchIcon className="header__search_icon" />
          </div>

          <div className="header__nav">
            <div className="header__option">
              <span className="header__optionLineOne">Hello, Guest</span>
              <span className="header__optionLineTwo">Sign, In</span>
            </div>

            <div className="header__option">
              <span className="header__optionLineOne">My Orders</span>
              <span className="header__optionLineTwo">& Returns</span>
            </div>

            <div className="header__option__cart">
              <ShoppingBasket />
              <span className="header__optionLineTwo">Cart</span>
              <span className="header__cart_value">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
