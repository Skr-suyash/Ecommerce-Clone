import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import Button from '@material-ui/core/Button';

export default function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__text">
              Subtotal (0 items):
              {' '}
              <strong>
                {value}
              </strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={1200}
        displayType="text"
        thousandSeparator
        prefix="$"
      />
      <Button variant="contained" color="primary"> Proceed to Checkout </Button>
    </div>
  );
}
