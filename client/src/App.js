import Form from './pages/Form';
import Partnership from './pages/Partnership';
import News from './pages/News';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Archive from './pages/Archive';

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
  const [cart, setCart] = useState([{ name: 'Your Cart is Empty', amount: 1 }]);
  const [slotsPurchased, setSlotsPurchased] = useState(4);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/edit' element={<Form slotsPurchased={slotsPurchased} />} />
          <Route path='/' element={
            <Fragment>
              <Navbar cart={cart} />
              <Home cart={cart} setCart={setCart} />
            </Fragment>
          } />
          <Route path='/archive' element={
            <Fragment>
              <Navbar cart={cart} />
              <Archive cart={cart} setCart={setCart} />
            </Fragment>
          } />
          <Route path='/10k-zipcode' element={
            <Fragment>
              <Navbar cart={cart} />
              <Partnership />
            </Fragment>
          } />
          <Route path='/news' element={
            <Fragment>
              <Navbar cart={cart} />
              <News />
            </Fragment>
          } />
          <Route path='/cart' element={
            <Fragment>
              <Navbar cart={cart} />
              <Cart cart={cart} setCart={setCart} setSlotsPurchased={setSlotsPurchased} />
            </Fragment>
          } />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
