import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  inputWrapper: {
    display: 'flex',
    margin: '50px',
    flexDirection: 'column',
  },
  wrapper: {
    width: '500px',
    height: ' 400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: '0 2px 4px 0 #0003, 0 25px 50px 0 #0000001a',
    overflow: 'hidden',
  },
  button: {
    margin: '15px',
    backgroundColor: 'inherit',
    border: '1px solid gray',
    outline: 'gray',
    color: '#777',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    borderLeft: '2px solid red',
  },
  span: {
    marginLeft: '10px',
    color: 'red',
  },
  wrapperDark: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export const useDarkStyles = makeStyles({
  inputWrapper: {
    display: 'flex',
    margin: '50px',
    flexDirection: 'column',
  },
  wrapper: {
    width: '500px',
    height: ' 400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: '0 2px 4px 0 #0003, 0 25px 50px 0 #0000001a',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  button: {
    margin: '15px',
    backgroundColor: 'inherit',
    border: '1px solid white',
    outline: 'white',
    color: 'white',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    borderLeft: '2px solid red',
  },
  span: {
    marginLeft: '10px',
    color: 'red',
  },
});
