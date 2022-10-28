import {makeStyles} from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    headerAvatar : {
        marginTop: '40%',
        height: 150,
        width: 150,
        '@media (min-width:1200px)': {
          height: 200,
          width: 200
    },
    
  },
  avatar: {
    '&:hover': {
      filter:'contrast(50%)',
      // opacity: '0.5',
      // backgroundColor:'gray',
        },
  },
  headerTitle: {
    color: "black",
    marginTop: 20,
    fontWeight: '500',
    fontSize:'2rem',
  },
  headerIcon: {
      color: "white"
  }
}));

export default useStyles;