import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

import App from './components/App';

// const theme = createTheme({});

createRoot(document.getElementById('root')).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ,
);
