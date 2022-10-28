import React from 'react';

import { Typography, List, Grid, Link } from '@mui/material';

//styling
import { commonStyles, commonBorderColor } from './styles';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { commonWidthMainMenu, commonSpacingTop } from '../../assets/css/sizing';

import useStyles from './styles';
import slack from '../../assets/svg/slack-seeklogo.com.svg';

const Menu = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <List sx={commonBorderColor}>
            <Typography
              variant="h6"
              className={classes.menuMainText}
              style={{ fontSize: '1rem' }}
            >
              {' '}
              <Link
                sx={{
                  ...commonStyles,
                }}
                id="twitter"
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black',
                }}
                href="https://twitter.com/techy_ayo"
              >
                Twitter Link
              </Link>{' '}
            </Typography>
          </List>
        </Grid>
        <Grid item>
          <List sx={commonBorderColor}>
            <Typography
              variant="h6"
              className={classes.menuMainText}
              style={{ fontSize: '1rem' }}
            >
              {' '}
              <Link
                id="btn__zuri"
                sx={{
                  ...commonStyles,
                }}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black',
                }}
                href="https://training.zuri.team/"
              >
                Zuri Team
              </Link>{' '}
            </Typography>
          </List>
        </Grid>
        <Grid item>
          <List sx={commonBorderColor}>
            <Typography
              variant="h6"
              className={classes.menuMainText}
              style={{ fontSize: '1rem' }}
            >
              {' '}
              <Link
                id="books"
                sx={{
                  ...commonStyles,
                }}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black',
                }}
                href="http://books.zuri.team"
              >
                Zuri Books
              </Link>{' '}
            </Typography>
          </List>
        </Grid>
        <Grid item>
          <List sx={commonBorderColor}>
            <Typography
              variant="h6"
              className={classes.menuMainText}
              style={{ fontSize: '1rem' }}
            >
              {' '}
              <Link
                id="book__python"
                sx={{
                  ...commonStyles,
                }}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black',
                }}
                href="https://books.zuri.team/python-for-beginners?ref_id=lazyProgrammer"
              >
                Python Books
              </Link>{' '}
            </Typography>
          </List>
        </Grid>
        <Grid item>
          <List sx={commonBorderColor}>
            <Typography
              variant="h6"
              className={classes.menuMainText}
              style={{ fontSize: '1rem' }}
            >
              {' '}
              <Link
                id="pitch"
                sx={{
                  ...commonStyles,
                }}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black',
                }}
                href="https://backgroundcheck.zuri.team"
              >
                Background Check for Coders
              </Link>{' '}
            </Typography>
          </List>
        </Grid>
        <Grid item>
          <List sx={commonBorderColor}>
            <Typography
              variant="h6"
              className={classes.menuMainText}
              style={{ fontSize: '1rem' }}
            >
              {' '}
              <Link
                id="book__design"
                sx={{
                  ...commonStyles,
                }}
                style={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  color: 'black',
                }}
                href="https://books.zuri.team/design-rules"
              >
                Design Book
              </Link>{' '}
            </Typography>
          </List>
        </Grid>

        <Grid item style={{ marginBottom: '50px' }}>
          <Typography className={classes.icon} variant="h4">
            <img className={classes.image} src={slack} alt="slack" />
            <GitHubIcon
              sx={{
                fontSize: 25,
              }}
            />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Menu;
