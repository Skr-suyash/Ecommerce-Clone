import React from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

export default function Sidebar(props) {
  const { open, onOpen, onClose } = props;
  return (
    <SwipeableDrawer
      open={open}
      onOpen={onOpen}
      onClose={onClose}
    >
      <List style={{ width: '250px' }}>
        <ListItem component={Link} to="/become-a-seller" button key="Seller">
          <AttachMoneyIcon />
          <ListItemText primary="Become a Seller" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
