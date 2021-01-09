import React from 'react';
import { Button, Card, Typography } from '@material-ui/core';
import './BecomeSeller.css';

export default function BecomeSeller() {
  return (
    <div className="becomeSeller">
      <Card className="becomeSeller__card">
        <Typography>
          <h3 className="becomeSeller__card__title"> Do you want to give this account Seller privileges? </h3>
          <p className="becomeSeller__card__info">By clicking Yes, you agree to Shopee&apos;s terms and conditions. </p>
        </Typography>
        <Button size="small" variant="contained" color="primary"> YES, AGREE </Button>
      </Card>
    </div>
  );
}
