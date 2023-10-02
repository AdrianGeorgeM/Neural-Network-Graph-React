import React, { useState } from 'react';
import { Handle } from 'reactflow';

const getColor = (operatorType) => {
	const operatorColors = {
		FullyConnected: '#e74c3c',
	};
	return operatorColors[operatorType] || '#e74c3c';
};

const FullyConnectedNode = ({ data }) => {
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

export default FullyConnectedNode;
