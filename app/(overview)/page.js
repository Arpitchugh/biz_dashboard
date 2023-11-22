'use client';
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../ui/theme';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
const cardData = [
	{
		icon: TrendingUpIcon,
		heading: 'Currently Raising',
		amount: '₹2.56 Cr',
		label: 'To be settled by',
		date: '7 Nov 2023 ',
	},
	{
		icon: TrackChangesIcon,
		heading: 'Target Raise',
		amount: '₹2.56 Cr',
		label: 'more can be raised',
		etc: 'know more',
	},
	{
		icon: CreditScoreIcon,
		heading: 'Current Exposure',
		amount: '₹70 L',
		label: 'To be settled by',
		date: '25 Nov 2023',
	},
];

const CardComponent = ({ icon: Icon, heading, amount, label, date, etc }) => {
	return (
		<Card className='min-w-[160px] m-2 rounded-xl '>
			<CardContent className='flex flex-col pt-6 pl-6 pr-20'>
				<Box className='flex gap-4 items-center mb-5'>
					<Icon />
					<Typography variant='h5'>
						{heading}
					</Typography>
				</Box>
				<Box sx={{ paddingLeft: '40px' }}>
					<Typography variant='h1'>
						{amount}
					</Typography>
					<Box className='flex flex-col mt-2.5'>
						<Typography
							variant='subtitle1'
							className='text-neutral-400'
						>
							{label}
						</Typography>
						<Typography
							variant='h3'
							className={
								etc &&
								'underline underline-offset-2'
							}
							sx={
								etc && {
									color: '#6D8FFF',
									fontSize: '14px',
								}
							}
						>
							{date ? date : etc}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

const overview = () => {
	return (
		<ThemeProvider theme={theme}>
			<Box className='flex flex-col gap-9'>
				{/* Heading Section */}
				<Box>
					<Typography variant='h2'>
						Overview
					</Typography>
					<Typography
						variant='h4'
						className='text-neutral-500'
					>
						Gives you a overview of all the
						Deals happening Today
					</Typography>
				</Box>
				{/* Cards Section */}
				<Box className='flex items-end flex-wrap justify-between'>
					<Box className='flex flex-row'>
						{cardData.map(
							(metric, index) => (
								<CardComponent
									key={
										index
									}
									{...metric}
								/>
							)
						)}
					</Box>

					<Box className='flex flex-col'>
						<Typography
							variant='h3'
							className='text-right'
						>
							Facing Any Issue?
						</Typography>
						<Typography
							variant='h4'
							className='text-neutral-400 underline underline-offset-2'
						>
							Get in Touch with your
							RM
						</Typography>
					</Box>
				</Box>
			</Box>
		</ThemeProvider>
	);
};

export default overview;
