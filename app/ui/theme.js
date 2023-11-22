import { createTheme } from '@mui/material/styles';


const theme = createTheme({
	typography: {
		fontFamily: 'inherit',
		h1: {
			fontSize: '2rem',
			fontStyle: 'normal',
			fontWeight: 600,
			lineHeight: '150%' /* 48px */,
			letterSpacing: '-0.64px',
		},
		h3: {
			fontSize: '1rem',
			fontStyle: 'normal',
			fontWeight: 400,
			lineHeight: '160%',
		},
	},
});

export default theme;
