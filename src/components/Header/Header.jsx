import React from 'react';

//mui components
import {
  Avatar,
  Grid,
  Typography,
  Tooltip,
  tooltipClasses,
} from '@mui/material';

import useStyles from './styles';
import { styled } from '@mui/material/styles';
import { CameraAltOutlined } from '@mui/icons-material';
import profileImg from '../../assets/image/default-img.png';
import share from '../../assets/svg/share-default.svg';

const headerAvatar = {
  marginTop: '30%',
  height: '88px',
  width: '88px',
  '@media (min-width:1200px)': {
    height: '88px',
    width: '88px',
  },
};

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        alignItems="center"
        justify="center"
        style={{}}
      >
        <Grid item>
          <Avatar
            id="profile__img"
            className={classes.avatar}
            src={profileImg}
            sx={{
              ...headerAvatar,
            }}
          />
          <CameraAltOutlined
            style={{
              position: 'relative',
              top: '-25',
              left: '30',
              color: 'white',
            }}
          />
        </Grid>

        <Grid item style={{ marginBottom: '30px' }}>
          <Typography className={classes.headerTitle} id="twitter" variant="h3">
            Lazy
          </Typography>
          <Typography
            className={classes.headerTitle}
            id="slack"
            variant="h3"
            hidden
          >
            lazyProgrammer
          </Typography>
        </Grid>
        <div className={classes.share}>
          <BootstrapTooltip title="share" placement="left">
            <picture>
              <source srcSet={share} />
              <img
                src={share}
                alt="share"
                style={{
                  border: '1px dotted lightgray',
                  borderRadius: '50%',
                  padding: '10px',
                }}
              />
            </picture>
          </BootstrapTooltip>
        </div>
      </Grid>
    </>
  );
};

export default Header;
