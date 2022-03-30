import Form from './pages/Form';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Form />
    </ThemeProvider>
  );
}

export default App;
