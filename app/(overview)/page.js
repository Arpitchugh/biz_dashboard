import React from 'react';
import {
	Card,
	CardContent,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from '@mui/material';

const overview = () => {
	return (
		<div className='flex flex-col gap-6'>
			{/* Current Exposure Section */}
			<Card className='shadow-md'>
				<CardContent>
					<Typography
						variant='h6'
						className='font-bold'
					>
						Current Exposure
					</Typography>
					<Typography variant='body1'>
						₹70L
					</Typography>
					<Typography
						variant='caption'
						className='text-gray-500'
					>
						10L due on 25 Nov 2023
					</Typography>
				</CardContent>
			</Card>

			{/* Currently Raising Deals Table */}
			<Card className='shadow-md'>
				<CardContent>
					<Typography
						variant='h6'
						className='font-bold'
					>
						Currently Raising Deals
					</Typography>
					<Table size='small'>
						<TableHead>
							<TableRow>
								<TableCell>
									Deal ID
								</TableCell>
								<TableCell>
									Type
								</TableCell>
								<TableCell>
									Listed
									amount
								</TableCell>
								<TableCell>
									Raised
									Amount
								</TableCell>
								<TableCell>
									Settlement
									Date
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{/* Map through your deals data to render table rows */}
							<TableRow>
								<TableCell>
									675
								</TableCell>
								<TableCell>
									AL
								</TableCell>
								<TableCell>
									₹30L
								</TableCell>
								<TableCell>
									₹15L
								</TableCell>
								<TableCell>
									07 Nov
									2023
								</TableCell>
							</TableRow>
							{/* ... other rows */}
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			{/* Payments Section */}
			<Card className='shadow-md'>
				<CardContent>
					<Typography
						variant='h6'
						className='font-bold'
					>
						Payments
					</Typography>
					{/* ... similar to the deals table ... */}
				</CardContent>
			</Card>
		</div>
	);
};

export default overview;
