import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Users from './content/Users/Users';

import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={darkTheme} >
        <Navbar />
        <Users />
      </ThemeProvider>
    </div>
  );
}

export default App;
