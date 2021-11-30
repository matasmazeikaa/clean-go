import React from 'react';
import Button from './Button';
import Modal from './Modal';

const SuccessModal = ({ isOpen, onClose }) => (
	<Modal isOpen={isOpen} onClose={onClose}>
		<h3 className="h3">Ačiū už Jūsų užklausą.</h3>
		<h3 className="h3 default-section-title-mb">Netrukus susieksime</h3>
		<Button onClick={onClose}>Uždaryti</Button>
	</Modal>
);

export default SuccessModal;
