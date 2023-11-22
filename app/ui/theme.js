import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	typography: {
		fontFamily: 'inherit',
		h1: {
			fontSize: '2rem',
			fontStyle: 'normal',
			fontWeight: 700,
			lineHeight: '150%',
		},
		h2: {
			fontSize: '2rem',
			fontStyle: 'normal',
			fontWeight: 600,
			lineHeight: '150%' /* 48px */,
			letterSpacing: '-0.64px',
		},
		h3: {
			fontSize: '18px',
			fontStyle: 'normal',
			fontWeight: 600,
			lineHeight: '160%',
		},
		h4: {
			fontSize: '1rem',
			fontStyle: 'normal',
			fontWeight: 400,
			lineHeight: '160%',
		},
		h5: {
			fontWeight: 500,
		},
		subtitle1: {
			fontSize: '14px',
		},
	},
});

export default theme;
