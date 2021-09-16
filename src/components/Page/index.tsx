import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

const Page: FC = ({ children }) => {
	const classes = useStyles();
	return <Box className={classes.body}>{children}</Box>;
};

export default Page;
