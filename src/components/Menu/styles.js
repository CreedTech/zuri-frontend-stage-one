import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  menuIconMain: {
    color: 'black',
  },
  menuIconMain2: {
    color: 'black',
  },
  menuIconSecondary: {
    color: 'black',
  },
  menuMainText: {
    color: 'black',
  },
  image: {
    width: '19px',
    height: '19px',
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px 0px',
    gap: '32px',

    // width: '1216px',
    height: '72px',

    background: '#FFFFFF',

    flex: 'none',
    order: '1',
    // alignSelf: 'stretch',
    // flexGrow: '0',
  },
}));

export default useStyles;

export const commonStyles = {
  // border: 3,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  //   padding: '24px 32px',
  gap: '8px',
  backgroundColor: '#EAECF0',
  // width:'100%',
  // elevation: 10,
  borderRadius: '8px',
  flex: 'none',
  order: '0',
  flexGrow: '1',
};

export const commonBorderColor = {
  height: '76px',
  backgroundColor: '#EAECF0',
  borderRadius: '8px',
  border: '1px solid #EAECF0',
  padding: '24px, 32px, 24px, 32px',
  width: '70vw',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: '#D0D5DD',
  },
};
