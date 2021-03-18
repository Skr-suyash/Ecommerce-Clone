import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import apiCalls from '../../api-config';
import { UserContext } from '../../context/userContext';

export default function Sidebar(props) {
  const userContext = useContext(UserContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const { id } = userContext.user;
    const response = await apiCalls.becomeSeller(id);
    if (response.status === 200) {
      // Update the localstorage item
      // eslint-disable-next-line no-alert
      alert('Successfuly became a seller');
    } else {
      // eslint-disable-next-line no-alert
      alert('Failed');
    }
  };

  const { open, onOpen, onClose } = props;
  return (
    <SwipeableDrawer
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      { userContext.user && !userContext.user.seller
        ? (
          <List style={{ width: '250px' }}>
            <ListItem component={Link} onClick={handleClick} button key="Seller">
              <AttachMoneyIcon />
              <ListItemText primary="Become a Seller" />
            </ListItem>
          </List>
        )
        : null}
    </SwipeableDrawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
