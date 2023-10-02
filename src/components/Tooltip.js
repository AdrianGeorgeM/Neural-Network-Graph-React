import React from 'react';
import '../styles/TooltipStyles.css';

function Tooltip({ data, position }) {
	return (
		<div
			className='tooltip-container'
			style={{
				top: `${position.y}px`,
				left: `${position.x}px`,
				transform: 'translateX(10px)',
			}}
		>
			<span className='operator-type'>Operator Type:</span>
			<span className='data-type'>{data.type}</span>
		</div>
	);
}

export default Tooltip;
