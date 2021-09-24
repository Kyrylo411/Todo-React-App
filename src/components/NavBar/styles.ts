import { makeStyles } from '@material-ui/core';

interface Props {
  theme: boolean;
}

export const useStyles = makeStyles({
  a: ({ theme }: Props) => ({
    margin: '10px',
    textDecoration: 'none',
    color: theme ? 'white' : 'gray',
    fontSize: '18px',
    outline: 'none',
    fontWeight: 'bold',
  }),
  activeLink: ({ theme }: Props) => ({
    color: theme ? 'rgba(255, 97, 97, 0.644)' : 'rgba(131, 16, 1, 0.671)',
    fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '20px',
  }),
  linkWrapper: ({ theme }: Props) => ({
    width: '100%',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme ? 'rgba(0, 0, 0, 0.5)' : '#f5f5f5',
  }),
});
