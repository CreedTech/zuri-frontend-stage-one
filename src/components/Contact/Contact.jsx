import React from 'react';

import { Grid, TextField, Button, Card, CardContent, Typography,InputLabel,FormControlLabel,Checkbox } from '@mui/material';

//styling
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { commonStyles, commonBorderColor } from './styles';
import { makeStyles } from '@mui/styles';
import theme from '../../assets/css/theme';
// import { commonWidthMainMenu, commonSpacingTop } from '../../assets/css/sizing';

// import style from './styles';

const Contact = () => {
  const classes = useStyles();
  const name = "Lazy";

  return (
    <div> 
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  "& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root":{
      borderRadius: '50px!important',
  },

  contact_card: {
      '@media (min-width:768px)': {
          width: '100%',
        },
  },
}));

export default Contact;

