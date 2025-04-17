import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Navbar />
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
