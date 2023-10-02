import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, {
	useNodesState,
	useEdgesState,
	ReactFlowProvider,
	Controls,
	addEdge,
	Background,
	Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import EdgeOptions from './edges/CustomEdge';
import ConnectionLine from './edges/ConnectionLine';
import Sidebar from './Sidebar';
import Tooltip from './Tooltip';
import useTooltip from '../hooks/UseTooltip';
import useFilteredNodes from '../hooks/UseFilteredNodes';
import { nodeTypes, edgeTypes } from '../constants/constants';
import FilterAndSearch from './FilterAndSearch';
import NodeManager from './NodeManager';
import '../styles/UnifiedComponent.css';
import VariantPanel from './panels/VariantPanel';
import { initialNodes, initialEdges } from '../data/initialData';

const UnifiedComponent = () => {
	const reactFlowWrapper = useRef(null);
	const [variant, setVariant] = useState('cross');
	const [sidebarData, setSidebarData] = useState(null);
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
	const [selectedNode, setSelectedNode] = useState(null);
	const { tooltipData, isTooltipVisible, showTooltip, hideTooltip } = useTooltip();
	const [filterValue, setFilterValue] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const filteredNodes = useFilteredNodes(nodes, filterValue, searchValue);
	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[setEdges]
	);

	const onNodeMouseEnter = useCallback(
		(event, node) => {
			const nodeElement = event.target.closest('.react-flow__node');
			if (nodeElement) {
				const { top, right } = nodeElement.getBoundingClientRect();
				const x = right + window.scrollX;
				const y = top + window.scrollY;
				setTooltipPosition({ x, y });
				showTooltip(node);
			}
		},
		[showTooltip]
	);

	const onNodeMouseLeave = useCallback(() => {
		hideTooltip();
	}, [hideTooltip]);

	const onNodeClick = useCallback((event, node) => {
		setSidebarData(node.data);
		setIsSidebarOpen(true);
		setSelectedNode(node);

		const nodeElement = event.target.closest('.react-flow__node');
		if (nodeElement) {
			nodeElement.classList.add('selected-node');
		}
	}, []);

	const removeNode = () => {
		if (selectedNode) {
			const nodeElement = document.querySelector('.react-flow__node.selected-node');
			if (nodeElement) {
				nodeElement.classList.remove('selected-node');
			}

			setNodes((ns) => ns.filter((n) => n.id !== selectedNode.id));
			setSelectedNode(null);
		}
	};
	const handleVariantChange = (selectedVariant) => {
		setVariant(selectedVariant);
	};
	return (
		<div className='wrapper' ref={reactFlowWrapper}>
			<div className='sidebar-and-filters'>
				<NodeManager
					setNodes={setNodes}
					selectedNode={selectedNode}
					removeNode={removeNode}
				/>
				<VariantPanel variant={variant} onVariantChange={handleVariantChange} />
				<FilterAndSearch
					filterValue={filterValue}
					setFilterValue={setFilterValue}
					searchValue={searchValue}
					setSearchValue={setSearchValue}
				/>
			</div>

			{isSidebarOpen && (
				<Sidebar nodeData={sidebarData} onClose={() => setIsSidebarOpen(false)} />
			)}
			{isTooltipVisible && <Tooltip data={tooltipData} position={tooltipPosition} />}

			<ReactFlow
				nodes={filteredNodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				nodeTypes={nodeTypes}
				defaultEdgeOptions={EdgeOptions.default}
				connectionLineComponent={ConnectionLine}
				edgeTypes={edgeTypes}
				elements={initialNodes}
				fitViewOptions={{ padding: 50, minZoom: 0.7 }}
				onNodeClick={onNodeClick}
				onNodeMouseEnter={onNodeMouseEnter}
				onNodeMouseLeave={onNodeMouseLeave}
			>
				<Background color='#ccc' variant={variant} />
				<Panel></Panel>
				<Controls />
			</ReactFlow>
		</div>
	);
};

export default React.memo(() => (
	<ReactFlowProvider>
		<UnifiedComponent />
	</ReactFlowProvider>
));
