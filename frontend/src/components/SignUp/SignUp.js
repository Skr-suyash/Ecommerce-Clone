import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Login/Login.css';
import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';

import apiCalls from '../../api-config';

export default function Login() {
  // Initialize useHistory hook
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpError, setSignUpError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    const response = await apiCalls.signUpUser(name, email, password);
    if (response.status !== 200) {
      setSignUpError(response.data);
    } else {
      // Save to user to sessionStorage
      localStorage.setItem('user', JSON.stringify(response.data));
      // Redirect
      history.push('/');
    }
  };

  return (
    <div className="signin">
      <div className="signin__top">
        <h1 className="signin__hero">Create an Account</h1>

        {/* Error Message */}
        {signUpError
          ? (
            <span className="signin__error">
              <ErrorIcon className="signin__error_icon" />
              {signUpError}
            </span>
          )
          : null}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <span className="signin__info">Name</span>
          <input
            required
            type="text"
            className="signin__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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
        <span className="signin__redirect">Already have an account?</span>
        <Link to="/login">
          <Button className="signin__button" color="secondary" variant="contained">Login to Shopee</Button>
        </Link>
      </div>
    </div>
  );
}
