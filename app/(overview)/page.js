'use client';
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../ui/theme';

const cardData = [
	{ amount: '₹2.56 Cr', label: 'Currently Raising' },
	{ amount: '₹5.98 Cr', label: 'Total Raised' },
	{ amount: '₹0.65 Cr', label: 'Available Target Raise' },
];

const overview = () => {
	return (
		<ThemeProvider theme={theme}>
			<div className='flex flex-col gap-6 '>
				{/* Heading Section */}
				<Box>
					<Typography variant='h1'>
						Overview
					</Typography>
					<Typography
						variant='h3'
						className='stone500 '
					>
						Gives you a overview of all the
						Deals happening Today
					</Typography>
				</Box>
				{/* Cards Section */}
			</div>
		</ThemeProvider>
	);
};

export default overview;
