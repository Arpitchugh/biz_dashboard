import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// JSON Object

const Cards = ({ amount, label }) => {
	return (
		<Card className='min-w-[160px] shadow-lg m-2'>
			<CardContent className='flex flex-col items-center p-4'>
				<Typography
					variant='h5'
					className='font-semibold text-lg'
				>
					{amount}
				</Typography>
				<Typography
					variant='subtitle1'
					className='text-gray-500'
				>
					{label}
				</Typography>
			</CardContent>
		</Card>
	);
};

// Define the cardsSection component that uses MetricCard
const CardsSection = ({ cardData }) => {
	return (
		<div className='flex justify-center items-center flex-wrap gap-4 p-4'>
			{cardData.map((metric, index) => (
				<Cards
					key={index}
					amount={metric.amount}
					label={metric.label}
				/>
			))}
		</div>
	);
};
export default CardsSection;
