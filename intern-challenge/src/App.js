import React, { Component } from 'react';
import './App.css';
import StripeBtn from './stripeBtn';
import Money from "./images/money.jpg";


class App extends Component{
  render() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={Money} className="logo" alt="logo"/>
      <p>Stripe Checkout API coding challenge</p>
      <StripeBtn />
      </header>
    </div>
  );
}
}


export default App;
