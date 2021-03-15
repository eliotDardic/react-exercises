import React from 'react';
import Box4 from './Box4';

const Box1 = () => {
	return (
		<div
			style={{
				padding: '10%',
				backgroundColor: 'pink',
				height: '30vh',
				width: '30vh',
				display: 'flex',
				flexDirection: 'column',
				gap: '5%',
			}}>
			<Box4 />
			<Box4 />
		</div>
	);
};

export default Box1;
