import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StripeBtn from './stripeBtn';


class App extends Component{
  render() {
  return (
    <div className="App">
      <p>Stripe Checkout API coding challenge</p>
      <StripeBtn />
    </div>
  );
}
}


export default App;
