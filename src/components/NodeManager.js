import React from 'react';
import '../styles/NodeManager.css';

let nodeId = 0;
let posY = 0;
const verticalSpacing = 100;

const NodeManager = ({ setNodes, selectedNode, removeNode }) => {
	const addNode = () => {
		setNodes((ns) => [
			...ns,
			{
				id: `node-${nodeId}`,
				type: 'default',
				data: { label: `Node ${nodeId}` },
				position: {
					x: 100,
					y: posY,
				},
				className: 'new-node',
			},
		]);

		nodeId++;
		posY += verticalSpacing;
	};

	return (
		<div className='node-manager'>
			<button onClick={addNode} className='add-button'>
				Add Node
			</button>
			<button
				onClick={removeNode}
				disabled={!selectedNode}
				className={`remove-button ${selectedNode ? 'enabled' : ''}`}
			>
				Remove Selected Node
			</button>
		</div>
	);
};

export default NodeManager;
