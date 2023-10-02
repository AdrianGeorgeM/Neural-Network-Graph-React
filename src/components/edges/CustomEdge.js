const EdgeOptions = {
	default: {
		type: 'smoothstep',
		animated: true,
		style: {
			stroke: '#ff5722',
			strokeWidth: 5,
		},
		markerEnd: { type: 'arrowclosed', color: '#ff5722' },
	},
	convolutionToReluEdge: {
		type: 'smoothstep',
		animated: true,
		style: {
			stroke: '#00ff00',
			strokeWidth: 2,
		},
		markerEnd: { type: 'arrowclosed', color: '#00ff00' },
	},
	poolingToConvolutionEdge: {
		type: 'smoothstep',
		animated: true,
		style: {
			stroke: '#0000ff',
			strokeWidth: 2,
		},
		markerEnd: { type: 'arrowclosed', color: '#0000ff' },
	},
};
export default EdgeOptions;

// const CustomEdge = ({
// 	sourceX,
// 	sourceY,
// 	targetX,
// 	targetY,
// 	sourcePosition,
// 	targetPosition,
// 	markerEnd,
// }) => {
// 	const edgePathParams = {
// 		sourceX,
// 		sourceY,
// 		sourcePosition,
// 		targetX,
// 		targetY,
// 		targetPosition,
// 	};

// 	const [path] = getBezierPath(edgePathParams);

// 	return <BaseEdge path={path} markerEnd={markerEnd} />;
// };

// export default CustomEdge;
