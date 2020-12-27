import { React, useState } from 'react';
import './Login.css';

import Button from '@material-ui/core/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log(email, password);
  };

  return (
    <div className="signin">
      <div className="signin__top">
        <h1 className="signin__hero">Login</h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <span className="signin__info">Email</span>
          <input
            required
            type="email"
            className="signin__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="signin__info">Password</span>
          <input
            required
            type="password"
            className="signin__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" variant="contained">
            Continue
          </Button>
        </form>
        {/*  **Form */}

        <span className="signin__condition">
          By continuing, you agree to Shopee&apos;s Conditions of Use and Privacy Notice.
        </span>
      </div>
      <div className="signin__bottom">
        <span className="signin__redirect">New to Shopee?</span>
        <Button className="signin__button" color="secondary" variant="contained">Create an Account</Button>
      </div>
    </div>
  );
}
