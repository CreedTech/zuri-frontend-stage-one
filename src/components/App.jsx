import React from 'react';

//mui components
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../assets/css/theme';
import {Header, Menu} from '.';

function App() {
  return (
    <div className="App">

    <ThemeProvider theme={theme}>
      <CssBaseline/>

      <Header/>

      <Menu/>

    </ThemeProvider>

  </div>
  );
}

export default App;
