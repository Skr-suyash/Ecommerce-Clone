/* eslint-disable no-unused-vars */
import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import BecomeSeller from './components/BecomeSeller/BecomeSeller';
import SellProduct from './components/SellProduct/SellProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/become-a-seller">
            <BecomeSeller />
          </Route>
          <Route exact path="/sellProduct">
            <SellProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
