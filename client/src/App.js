import Form from './pages/Form';
import Buy from './pages/Buy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Form />}/>
        <Route path='/buy' element={<Buy />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
