import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({
	subsets: ['latin'],
});

const theme = createTheme();

theme.typography = {
	fontFamily: inter.style.fontFamily,
	h3: {
		fontSize: '1.2rem',
		
		'@media (min-width:600px)': {
			fontSize: '1.5rem',
		},
		[theme.breakpoints.up('md')]: {
			fontSize: '2.4rem',
		},
	},
};

export default theme;
