import React, { useState } from 'react';
import { Handle } from 'reactflow';

const getColor = (operatorType) => {
	const operatorColors = {
		Dropout: '#f39c12',
	};
	return operatorColors[operatorType] || '#f39c12';
};

const DropoutNode = ({ data }) => {
	const { label } = data;
	const [bgColor, setBgColor] = useState(() => getColor(data.operatorType));

	const handleNodeClick = () => {
		setBgColor('#a7ffeb');
	};

	return (
		<div
			className='custom-node'
			style={{ backgroundColor: bgColor, borderRadius: '4px' }}
			onClick={handleNodeClick}
		>
			<div className='node-label'>{label}</div>
			<Handle type='target' position='top' className='handle-style' />
			<Handle type='source' position='bottom' className='handle-style' />
		</div>
	);
};

export default DropoutNode;
