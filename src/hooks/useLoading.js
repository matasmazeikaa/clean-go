import { useState } from 'react';

export const useLoading = () => {
	const [isLoading, setIsLoading] = useState(false);

	const updateLoading = (value) => {
		setIsLoading(value);
	};

	return {
		isLoading,
		updateLoading,
	};
};
