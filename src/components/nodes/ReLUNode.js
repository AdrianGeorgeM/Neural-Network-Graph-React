import React, { useState } from 'react';
import { Handle } from 'reactflow';

const ReLUNode = ({ data }) => {
	const { label, id } = data;
	const [bgColor, setBgColor] = useState('lightgreen');
	const [activeNodeId, setActiveNodeId] = useState(null);

	const handleNodeClick = () => {
		if (id === activeNodeId) {
			setBgColor('lightgreen');
			setActiveNodeId(null);
		} else {
			setBgColor('#a7ffeb');
			setActiveNodeId(id);
		}
	};

	return (
		<div
			className='custom-node'
			style={{ backgroundColor: bgColor, padding: '10px', borderRadius: '50%' }}
			onClick={handleNodeClick}
		>
			<div className='node-label'>{label}</div>
			<Handle type='target' position='top' className='handle-style' />
			<Handle type='source' position='bottom' className='handle-style' />
		</div>
	);
};

export default ReLUNode;
