import React, { useState } from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import './BecomeSeller.css';
import { useHistory } from 'react-router-dom';
import apiCalls from '../../apiCalls';

export default function BecomeSeller() {
  // State
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleClick = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await apiCalls.becomeSeller(user.id);
    if (response.status !== 200) {
      setError(true);
    } else {
      // eslint-disable-next-line no-alert
      alert('Successfully became seller');
      history.push('/');
    }
  };

  return (
    <div className="becomeSeller">
      { error ? <h1>Error</h1> : null }
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
