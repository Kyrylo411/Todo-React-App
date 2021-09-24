import { makeStyles } from '@material-ui/core';

interface Props {
  theme: boolean;
}

export const useStyles = makeStyles(() => ({
  inputWrapper: {
    display: 'flex',
    margin: '50px',
    flexDirection: 'column',
  },
  wrapper: ({ theme }: Props) => ({
    width: '500px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxShadow: '0 2px 4px 0 #0003, 0 25px 50px 0 #0000001a',
    overflow: 'hidden',
    backgroundColor: theme ? 'rgba(200,0 , 0, 0.5)' : 'white',
  }),
  button: ({ theme }: Props) => ({
    margin: '15px',
    backgroundColor: 'inherit',
    border: `1px solid ${theme ? 'white' : 'gray'}`,
    outline: theme ? 'white' : 'gray',
    color: theme ? 'white' : '#777',
  }),
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    borderLeft: '2px solid red',
  },
}));
