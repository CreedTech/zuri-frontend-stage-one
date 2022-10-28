import React from 'react';

import { Typography, List, Box, Grid, Link } from '@mui/material';

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
          <Box
            sx={{
              ...commonStyles,
            }}
          >
            <List sx={commonBorderColor}>
              <Typography variant="h6" className={classes.menuMainText}>
                {' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  Twitter Link
                </Link>{' '}
              </Typography>
            </List>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              ...commonStyles,
            }}
          >
            <List sx={commonBorderColor}>
              <Typography variant="h6" className={classes.menuMainText}>
                {' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  Zuri Team
                </Link>{' '}
              </Typography>
            </List>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              ...commonStyles,
            }}
          >
            <List sx={commonBorderColor}>
              <Typography variant="h6" className={classes.menuMainText}>
                {' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  Zuri Books
                </Link>{' '}
              </Typography>
            </List>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              ...commonStyles,
            }}
          >
            <List sx={commonBorderColor}>
              <Typography variant="h6" className={classes.menuMainText}>
                {' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  Python Books
                </Link>{' '}
              </Typography>
            </List>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              ...commonStyles,
            }}
          >
            <List sx={commonBorderColor}>
              <Typography variant="h6" className={classes.menuMainText}>
                {' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  Background Check for Coders
                </Link>{' '}
              </Typography>
            </List>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              ...commonStyles,
            }}
          >
            <List sx={commonBorderColor}>
              <Typography variant="h6" className={classes.menuMainText}>
                {' '}
                <Link
                  style={{
                    textDecoration: 'none',
                    cursor: 'pointer',
                    color: 'black',
                  }}
                >
                  Design Book
                </Link>{' '}
              </Typography>
            </List>
          </Box>
        </Grid>

        <Grid item spacing={3} style={{ marginBottom: '50px' }}>
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
