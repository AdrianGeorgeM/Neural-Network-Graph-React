import React, { useState } from 'react';
import { Handle } from 'reactflow';
import '../../styles/ConvolutionNode.css';

const ConvolutionNode = ({ data }) => {
	const { label } = data;
	const [bgColor, setBgColor] = useState('#e0f7fa');

	const handleNodeClick = () => {
		setBgColor(bgColor === '#e0f7fa' ? '#a7ffeb' : '#e0f7fa');
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

export default ConvolutionNode;
