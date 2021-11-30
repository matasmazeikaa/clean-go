import React, { useState, useCallback } from 'react';
import { useModal } from '@/hooks/useModal';
import { useLoading } from '@/hooks/useLoading';
import Button from './Button';
import Modal from './Modal';
import Input from './Input';
import './OrderModal.scss';
import { sendMailApi } from '@/api/sendMailApi';

const DEFAULT_ORDER_VALUES = {
	name: '',
	phone: '+370',
	cleaningType: '',
	service: '',
};

const OrderModal = ({ service, area, cleaningType, currentPrice, priceRange, frequency }) => {
	const { isModalOpen, closeModal, setModalVisible } = useModal();
	const { isLoading, updateLoading } = useLoading();
	const [isOrdered, setIsOrdered] = useState(false);

	const [values, setValues] = useState({
		name: '',
		phone: '+370',
		cleaningType: '',
		service,
	});

	const handleChange = (event) => {
		const { value, name } = event.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const resetInput = () => {
		setValues(DEFAULT_ORDER_VALUES);
	};

	const onFormSubmit = async (event) => {
		event.preventDefault();
		updateLoading(true);

		try {
			await sendMailApi({ ...values, area, cleaningType, frequency, currentPrice, priceRange });
			setModalVisible(true);
			resetInput();
			setIsOrdered(true);
		} catch (error) {
			console.error(error);
		} finally {
			updateLoading(false);
		}
	};

	const handleModalClose = useCallback(() => {
		setIsOrdered(false);
		closeModal();
	}, [closeModal]);

	return (
		<>
			<Button onClick={() => setModalVisible(true)}>Užsisakyti</Button>
			<Modal isOpen={isModalOpen} onClose={handleModalClose} className="order-modal">
				{isOrdered ? (
					<>
						<h3 className="h3">Ačiū už Jūsų užklausą.</h3>
						<h3 className="h3 order-modal__title">Netrukus susieksime</h3>
						<Button onClick={handleModalClose}>Uždaryti</Button>
					</>
				) : (
					<>
						<h3 className="h3 order-modal__title">
							Užpildykite formą ir mes netrūkus su jumis susieksime
						</h3>
						<form className="order-modal-form" onSubmit={onFormSubmit} id="order-modal-form">
							<div className="order-modal-form__inputs">
								<Input
									isRequired
									label="Vardas:*"
									name="name"
									value={values.name}
									onChange={handleChange}
									requiredMessage="Vardas privalomas"
								/>
								<Input
									label="Telefono numeris:*"
									name="phone"
									type="tel"
									value={values.phone}
									onChange={handleChange}
									isRequired
									requiredMessage="Tel. nr privalomas"
								/>
							</div>
							<Button className="hero-order__button" type="submit" isLoading={isLoading}>
								Užsakyti
							</Button>
						</form>
					</>
				)}
			</Modal>
		</>
	);
};

export default OrderModal;
