import React from 'react';

//mui components
import { Avatar, Grid, Typography } from '@mui/material';


import useStyles from './styles';
import { CameraAltOutlined } from '@mui/icons-material';


const headerAvatar = {
  marginTop: '40%',
  height: '88px',
  width: '88px',
  '@media (min-width:1200px)': {
    height: '88px',
    width: '88px'
  }
}


const Header=() =>{

const classes = useStyles();

  

  return (


      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{}}>
        <Grid item>
          <Avatar id="profile__img" className={classes.avatar} src={`https://media.michaelangrivera.com/michaelangrivera-links/avatar.png`} sx={{
            ...headerAvatar
              }} />
              <CameraAltOutlined style={{position:'relative', top:'-25', left:'30', color:'white'}} />
        </Grid>

        <Grid item spacing={3} style={{marginBottom:'50px'}}>
          <Typography className={classes.headerTitle}  variant="h3">
            Lazy Programmer
          </Typography>
        </Grid>
      </Grid>


  )

}

export default Header;