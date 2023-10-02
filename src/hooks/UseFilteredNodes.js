import { useMemo } from 'react';

const useFilteredNodes = (nodes, filterValue, searchValue) => {
	return useMemo(() => {
		return nodes.filter(
			(node) =>
				(filterValue === '' || node.type.includes(filterValue)) &&
				(searchValue === '' ||
					node.type.toLowerCase().includes(searchValue.toLowerCase()))
		);
	}, [nodes, filterValue, searchValue]);
};

export default useFilteredNodes;
