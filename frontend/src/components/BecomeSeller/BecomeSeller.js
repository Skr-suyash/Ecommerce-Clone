import React, { useContext, useState } from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import './BecomeSeller.css';
import apiCalls from '../../api-config';

export default function BecomeSeller() {
  // Context
  const userContext = useContext(UserContext);

  // State
  const [error, setError] = useState(false);

  const handleClick = async () => {
    const response = await apiCalls.becomeSeller(userContext.user.id);
    if (response.status !== 200) {
      setError(true);
    }
  };

  return (
    <div className="becomeSeller">
      { error
        ? <h1>Error</h1>
        : (
          // eslint-disable-next-line no-alert
          alert('You have successfully become a seller'),
            <Redirect to="/" />
        )}
      <Card className="becomeSeller__card">
        <Typography>
          <h3 className="becomeSeller__card__title"> Do you want to give this account Seller privileges? </h3>
          <p className="becomeSeller__card__info">By clicking Yes, you agree to Shopee&apos;s terms and conditions. </p>
        </Typography>
        <Button onClick={handleClick} size="small" variant="contained" color="primary"> YES, AGREE </Button>
      </Card>
    </div>
  );
}
