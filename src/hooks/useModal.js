import { useCallback, useState } from 'react';

export const useModal = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const setModalVisible = useCallback((value) => {
		setModalOpen(value);
	}, []);

	const closeModal = useCallback(() => {
		setModalOpen(false);
	}, []);

	return {
		isModalOpen,
		setModalVisible,
		closeModal,
	};
};
