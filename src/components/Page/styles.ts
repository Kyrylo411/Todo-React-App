import { makeStyles } from '@material-ui/core';

interface Props {
  theme: boolean;
}

export const useStyles = makeStyles(() => ({
  body: ({ theme }: Props) => ({
    backgroundColor: theme ? 'rgba(0, 0, 0, 0.5)' : '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0',
    minWidth: 'inherit',
    width: '100vw',
    minHeight: '89.8vh',
  }),
}));
