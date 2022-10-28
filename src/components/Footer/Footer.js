import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import ZuriLogo from '../../assets/image/Zuri.Internship_Logo.png';
import I4G from '../../assets/image/I4G.jpg';
const Footer = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.footerDivider}>
        <div className={classes.divider} />
      </div>

      <footer className={classes.footer}>
        <img src={ZuriLogo} alt="Zuri.Internship_Logo" />
        <Typography
          fontSize="18px"
          fontWeight={300}
        //   lineHeight="30px"
          style={{ marginBottom: '2rem' }}
        >
          HNG Internship 9 Frontend Task
        </Typography>
        <img src={I4G} alt="I4G" />
      </footer>
    </>
  );
};

const useStyles = makeStyles({
  footer: {
    //   width: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    paddingBottom: '2rem',
    '@media screen and (max-width:980px)': {
      alignItems: 'left',
      textAlign: 'left',
      justifyContent: 'flex-start',
      paddingLeft: '0rem',
      paddingRight: '15rem',
      flexDirection: 'column',
    },
  },
  footerDivider: {
    //   width: "100%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    paddingBottom: '2rem',
    '@media screen and (max-width:980px)': {
      alignItems: 'left',
      justifyContent: 'flex-start',
      paddingLeft: '0rem',
      paddingRight: '1rem',
      flexDirection: 'column',
    },
  },
  divider: {
    width: '100%',
    height: '1px',
    background: 'lightgray',
    marginBottom: '2rem',
  },
});

export default Footer;
