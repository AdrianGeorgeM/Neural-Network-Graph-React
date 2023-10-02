import React from 'react';
import '../styles/FilterAndSearch.css';

const FilterAndSearch = ({
	filterValue,
	setFilterValue,
	searchValue,
	setSearchValue,
}) => {
	return (
		<div className='container'>
			<select
				className='select'
				value={filterValue}
				onChange={(e) => setFilterValue(e.target.value)}
			>
				<option value=''>All</option>
				<option value='input'>Input</option>
				<option value='Convolution'>Convolution</option>
				<option value='ReLU'>ReLU</option>
				<option value='Pooling'>Pooling</option>
				<option value='FullyConnected'>Fully Connected</option>
				<option value='Dropout'>Dropout</option>
				<option value='Softmax'>Softmax</option>
				<option value='output'>Output</option>
			</select>
			<div className='searchBox'>
				<input
					className='input'
					type='text'
					placeholder='Search nodes...'
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
				/>
				<div className='icon'>🔍</div>
			</div>
		</div>
	);
};

export default FilterAndSearch;
