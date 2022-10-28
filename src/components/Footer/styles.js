import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: '100vw',
    display: 'flex',
    marginBottom: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerContent: {
    margin: '5px',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
}));

export default useStyles;
