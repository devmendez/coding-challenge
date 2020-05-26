
//this component button when clicked will open the react stripe checkout modal
import React, { Fragment } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const stripeBtn = () => {
    const publishableKey = "pk_test_gKxIq787asrVkHzx61WpvpbO00twSYKrMB";


const onToken = token => {
    const body = {
      amount: 799,
      token: token
  };

  axios
      .post("http://localhost:8000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <StripeCheckout
      label="Pay Here" //Component button text
      name="Managerly LLC" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Checkout" //Submit button in modal
      amount={799} //Amount in cents $7.99
      token={onToken}
      stripeKey={publishableKey}
      image="https://stripe.com/img/documentation/checkout/marketplace.png"
      billingAddress={false}
    />
  );
}

export default stripeBtn;