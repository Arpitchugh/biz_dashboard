import { Inter } from 'next/font/google';
import './globals.css';
import SideNav from './components/sideNav';
import { Box } from '@mui/material';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<SideNav />
				<Box
					component='main'
					sx={{
						flexGrow: 1,
						ml: `240px`,
						mt: ['48px', '56px', '64px'],
						p: 3,
					}}
				>
					{children}
				</Box>
			</body>
		</html>
	);
}
