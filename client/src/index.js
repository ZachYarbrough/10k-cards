import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51KlExIA1iRI5Dkzn0gFB9iwfK4LXGijoEHkhZcrtqczqWaRNSGptgcHAEtYhKHnVcuzvBeS0Zv19FzW9dxm2pV2y00IyC0aajS')

ReactDOM.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>,
  document.getElementById('root')
);
