import Form from './pages/Form';
import Partnership from './pages/Partnership';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Billing from './pages/Billing';
import Receipt from './pages/Receipt';
import Footer from './components/Footer';

import { useState, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#86764e'
    }
  }
})

const App = () => {
  const [billingFormState, setBillingFormState] = useState({});
  const [cart, setCart] = useState([{ name: 'Your Cart is Empty', amount: 1, description: 'No Items in Cart' }]);
  const [slotsPurchased, setSlotsPurchased] = useState(4);
  const [cardType, setCardType] = useState('');
  const [sum, setSum] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/edit' element={<Form cardType={cardType} slotsPurchased={slotsPurchased} setSlotsPurchased={setSlotsPurchased} billingFormState={billingFormState} setBillingFormState={setBillingFormState} />} />
          <Route path='/' element={
            <Fragment>
              <Navbar cart={cart} />
              <Home cart={cart} setCart={setCart} sum={sum} setSum={setSum} />
              <Footer />
            </Fragment>
          } />
          <Route path='/10k-zipcode' element={
            <Fragment>
              <Navbar cart={cart} />
              <Partnership />
              <Footer />
            </Fragment>
          } />
          <Route path='/cart' element={
            <Fragment>
              <Navbar cart={cart} />
              <Cart cart={cart} setCart={setCart} sum={sum} setSum={setSum} setSlotsPurchased={setSlotsPurchased} />
              <Footer />
            </Fragment>
          } />
          <Route path='/checkout' element={
            <Fragment>
              <Navbar cart={cart} />
                <Billing sum={sum} setSum={setSum} billingFormState={billingFormState} setBillingFormState={setBillingFormState} />
                <Footer />
            </Fragment>
          } />
          <Route path='/receipt' element={
            <Fragment>
              <Navbar cart={cart} />
              <Receipt cart={cart} setCart={setCart} sum={sum} setSum={setSum} setCardType={setCardType} />
              <Footer />
            </Fragment>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;