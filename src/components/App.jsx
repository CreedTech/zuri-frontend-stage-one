import React from 'react';

//mui components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../assets/css/theme';
import { Header, Menu, Footer } from '.';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header />

        <Menu />

        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
