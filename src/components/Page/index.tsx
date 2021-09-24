import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';
import { useTheme } from '../ThemeProvider';

const Page: FC = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return <Box className={classes.body}>{children}</Box>;
};

export default Page;
