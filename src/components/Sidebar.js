import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ nodeData, onClose }) => (
	<div className='sidebar'>
		<div className='sidebar-header'>
			<h2>Node Details</h2>
			<button className='closeButton' onClick={onClose}>
				<i className='fas fa-times'></i>
			</button>
		</div>
		{nodeData && (
			<div className='sidebar-content'>
				<h3>{nodeData.label}</h3>
				{nodeData.parameters && (
					<div>
						<h4>Parameters</h4>
						<ul>
							{Object.entries(nodeData.parameters).map(([key, value]) => (
								<li key={key}>
									<strong>{key.replace('_', ' ')}: </strong>
									<span>{value}</span>
									<span
										className='tooltip'
										title={`Description for ${key.replace('_', ' ')}`}
									>
										<i className='info-icon fas fa-info-circle'></i>
									</span>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		)}
	</div>
);

export default Sidebar;
