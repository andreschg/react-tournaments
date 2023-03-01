import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Navbar from './components/Navbar';
import UsersManagement from './pages/Users/UsersManagement';
import AppBar from './components/AppBar';

import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme} >
      {/* <Navbar>
        <UsersManagement />
      </Navbar> */}
      <CssBaseline />
      <AppBar />
      <Container>
        <UsersManagement />
      </Container>
    </ThemeProvider>
  );
}

export default App;
