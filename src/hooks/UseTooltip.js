import { useState } from 'react';

const useTooltip = () => {
	const [tooltipData, setTooltipData] = useState(null);
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const showTooltip = (node) => {
		setTooltipData(node);
		setIsTooltipVisible(true);
	};

	const hideTooltip = () => {
		setIsTooltipVisible(false);
	};

	return {
		tooltipData,
		isTooltipVisible,
		showTooltip,
		hideTooltip,
	};
};

export default useTooltip;
