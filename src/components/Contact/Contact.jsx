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
import { useFormik } from 'formik';

//styling
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import theme from '../../assets/css/theme';

const validate = (data) => {
  const errors = {};

  if (!data.first_name) {
    errors.first_name = 'Please Enter first Name';
  }

  if (!data.last_name) {
    errors.last_name = 'Please Enter last_name';
  }

  if (!data.email) {
    errors.email = 'Please Enter email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    errors.email = 'Invalid email address';
  }
  if (!data.message) {
    errors.message = 'Please Enter message';
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      message: '',
    },
    validate: validate,
    onSubmit: (values) => {
      alert('Subimtted Successfully');
    },
  });
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
              <form
                onSubmit={formik.handleSubmit}
                sx={{ borderRadius: '8px!important' }}
              >
                <Grid container spacing={4}>
                  <Grid xs={12} sm={6} item>
                    <InputLabel shrink htmlFor="first_name">
                      First Name
                    </InputLabel>
                    <TextField
                      value={formik.values.first_name}
                      placeholder="Enter your first name"
                      id="first_name"
                      onChange={formik.handleChange}
                      // error={text === ''}
                      // helperText={text === '' ? 'Empty!' : ''}
                      variant="outlined"
                      sx={{
                        '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root':
                          { borderRadius: '8px!important' },
                      }}
                      fullWidth
                    />
                    {formik.touched.first_name && formik.errors.first_name ? (
                      <span style={{ color: 'red' }}>
                        {formik.errors.first_name}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <InputLabel shrink htmlFor="last_name">
                      Last Name
                    </InputLabel>
                    <TextField
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      placeholder="Enter your last name"
                      id="last_name"
                      variant="outlined"
                      sx={{
                        '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root':
                          { borderRadius: '8px!important' },
                      }}
                      fullWidth
                    />
                    {formik.touched.last_name && formik.errors.last_name ? (
                      <span style={{ color: 'red' }}>
                        {formik.errors.last_name}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel shrink htmlFor="email">
                      Email
                    </InputLabel>
                    <TextField
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      type="email"
                      placeholder="yourname@email.com"
                      id="email"
                      variant="outlined"
                      sx={{
                        '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root':
                          { borderRadius: '8px!important' },
                      }}
                      fullWidth
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <span style={{ color: 'red' }}>
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel shrink htmlFor="message">
                      Message
                    </InputLabel>
                    <TextField
                      value={formik.values.message}
                      onChange={formik.handleChange}
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
                    />
                    {formik.touched.message && formik.errors.message ? (
                      <span style={{ color: 'red' }}>
                        {formik.errors.message}
                      </span>
                    ) : null}
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
