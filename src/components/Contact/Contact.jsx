import React from 'react';

import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  InputLabel,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

//styling
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import theme from '../../assets/css/theme';

const Contact = () => {
  const classes = useStyles();
  const name = 'Lazy';

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justify="center"
          sx={{ marginTop: '5%' }}
        >
          <Card
            className={classes.contact_card}
            style={{
              width: '70%',
              padding: '20px 5px',
              margin: '0 auto',
              border: 0,
              boxShadow: 'none',
              '(@media (maxWidth:768px)': {
                width: '100%',
              },
            }}
          >
            <CardContent>
              <Grid sx={{ marginBottom: '3%' }}>
                <Typography
                  gutterBottom
                  variant="h2"
                  fontWeight={600}
                  fontSize="2.5rem"
                >
                  Contact Me
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  fontWeight={400}
                  component="p"
                  gutterBottom
                >
                  Hi there, contact me to ask me about anything you have in
                  mind.
                </Typography>
              </Grid>
              <form sx={{ borderRadius: '20px' }}>
                <Grid container spacing={4}>
                  <Grid xs={12} sm={6} item>
                    <InputLabel shrink htmlFor="first_name">
                      First Name
                    </InputLabel>
                    <TextField
                      placeholder="Enter your first name"
                      id="first_name"
                      variant="outlined"
                      sx={{
                        '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root':
                          { borderRadius: '8px!important' },
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <InputLabel shrink htmlFor="last_name">
                      Last Name
                    </InputLabel>
                    <TextField
                      placeholder="Enter your last name"
                      id="last_name"
                      variant="outlined"
                      sx={{
                        '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root':
                          { borderRadius: '8px!important' },
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel shrink htmlFor="email">
                      Email
                    </InputLabel>
                    <TextField
                      type="email"
                      placeholder="yourname@email.com"
                      id="email"
                      variant="outlined"
                      sx={{
                        '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root':
                          { borderRadius: '8px!important' },
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel shrink htmlFor="message">
                      Message
                    </InputLabel>
                    <TextField
                      multiline
                      rows={4}
                      id="message"
                      placeholder="Send me  message and I'll reply you as soon as possible..."
                      variant="outlined"
                      sx={{
                        '& .css-8wbhmm-MuiInputBase-root-MuiOutlinedInput-root':
                          { borderRadius: '8px!important' },
                      }}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={`You agree to providing your data to ${name} who may contact you.`}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      id="btn__submit"
                      color="primary"
                      sx={{
                        borderRadius: '8px!important',
                        padding: '.5rem 0',
                        textTransform: 'none',
                        backgroundColor: '#1570EF',
                        fontSize: 16,
                      }}
                      fullWidth
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </ThemeProvider>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root': {
    borderRadius: '50px!important',
  },

  contact_card: {
    '@media (min-width:768px)': {
      width: '100%',
    },
  },
}));

export default Contact;
