import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
	a: {
		margin: '10px',
		textDecoration: 'none',
		color: 'gray',
		fontSize: '18px',
		outline: 'none',
	},
	activeLink: {
		color: 'rgba(131, 16, 1, 0.671)',
		textDecoration: 'underline',
	},
});
