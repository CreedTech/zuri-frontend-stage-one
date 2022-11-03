import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  '& .css-bx38nh-MuiInputBase-root-MuiOutlinedInput-root': {
    borderRadius: '50px!important',
  },
  border_radius_fix: {
    borderRadius: '50px!important',
  },

  contact_card: {
    '@media (min-width:768px)': {
      width: '100%',
    },
  },
}));

export default useStyles;
