import React, { useContext, useEffect } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';

export default function Header() {
  const user = useContext(UserContext);
  useEffect(() => {
    const userStored = localStorage.getItem('user');
    if (userStored) {
      const foundUser = JSON.parse(userStored);
      user.setUser(foundUser);
    }
  }, []);

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
            <Link to={!user.user ? '/login' : '/#'}>
              <div className="header__option">
                <span className="header__optionLineOne">
                  Hello,
                  {' '}
                  { user.user ? null : 'Guest' }
                </span>
                <span className="header__optionLineTwo">{ user.user ? user.user.name : 'Sign In' }</span>
              </div>
            </Link>

            <div className="header__option">
              <span className="header__optionLineOne">My Orders</span>
              <span className="header__optionLineTwo">& Returns</span>
            </div>

            <Link to="/cart">
              <div className="header__option__cart">
                <ShoppingBasket />
                <span className="header__optionLineTwo">Cart</span>
                <span className="header__cart_value">0</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
