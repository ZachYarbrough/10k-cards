import Form from './pages/Form';
import Buy from './pages/Buy';
import Partnership from './pages/Partnership';
import News from './pages/News';
import Cart from './pages/Cart';

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/edit' element={<Form />} />
          <Route path='/' element={<Buy />} />
          <Route path='/partnership' element={<Partnership />} />
          <Route path='/news' element={<News />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
