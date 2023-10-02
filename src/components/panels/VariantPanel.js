import React from 'react';
import '../../styles/VariantPanel.css';

const VariantPanel = ({ variant, onVariantChange }) => {
	return (
		<div className='variant-panel'>
			<div className='variant-label'>Select Variant:</div>
			<select
				value={variant}
				onChange={(e) => onVariantChange(e.target.value)}
				className='variant-dropdown'
			>
				<option value='dots'>Dots</option>
				<option value='lines'>Lines</option>
				<option value='cross'>Cross</option>
			</select>
		</div>
	);
};

export default VariantPanel;
