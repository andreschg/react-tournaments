import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/Navbar';
import AppBar from '../components/AppBar';
import Drawer from '../components/Drawer';

import '../App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function Root() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  }

  return (
    <ThemeProvider theme={darkTheme} >
      {/* <Navbar>
        <UsersManagement />
      </Navbar> */}
      <CssBaseline />
      <AppBar onMenuIconClick={openDrawer} />
      <Drawer open={isDrawerOpen} onClickCloseIcon={closeDrawer} />
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  );
}

export default Root;
