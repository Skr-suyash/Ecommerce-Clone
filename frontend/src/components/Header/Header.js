import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Menu from '@material-ui/icons/Menu';
import { UserContext } from '../../context/userContext';
import Sidebar from '../Sidebar/Sidebar';

export default function Header() {
  // States
  const [openSidebar, setOpenSidebar] = useState(false);

  // Context
  const userContext = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem('user');
    if (userStored) {
      const foundUser = JSON.parse(userStored);
      userContext.setUser({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      });
    }
  }, []);

  /**
   * Function to oprn the sidebar
   * @param {Boolean} open
   */
  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenSidebar(open);
  };

  return (
    <div>
      <div>
        <div className="header">
          {/* SideBar */}
          <Sidebar open={openSidebar} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)} />
          <IconButton onClick={toggleDrawer(true)}>
            <Menu className="header__menuIcon" />
          </IconButton>
          <img className="header__logo" src="/logo.png" alt="Logo" />
          <div className="header__search">
            <input className="header__searchInput" />
            <SearchIcon className="header__search_icon" />
          </div>

          <div className="header__nav">
            <Link to={!userContext.user ? '/login' : '/#'}>
              <div className="header__option">
                <span className="header__optionLineOne">
                  Hello,
                  {' '}
                  {userContext.user ? null : 'Guest'}
                </span>
                <span className="header__optionLineTwo">{userContext.user ? userContext.user.name : 'Sign In'}</span>
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
