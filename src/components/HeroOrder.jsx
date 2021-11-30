import React, { useState } from 'react';
import { useLoading } from '@/hooks/useLoading';
import Button from './Button';
import './HeroOrder.scss';
import Input from './Input';
import { sendMailApi } from '@/api/sendMailApi';
import SuccessModal from './SuccessModal';
import { useModal } from '@/hooks/useModal';
import { CLEANING_SERVICES_SELECT, CLEANING_TYPES_SELECT } from '@/constants/navigation-constants';
import Select from './Select';

const DEFAULT_ORDER_VALUES = {
	name: '',
	phone: '+370',
	cleaningType: '',
	service: '',
};

const HeroOrder = () => {
	const { isLoading, updateLoading } = useLoading();
	const { isModalOpen, closeModal, setModalVisible } = useModal();

	const [values, setValues] = useState(DEFAULT_ORDER_VALUES);

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
			await sendMailApi(values);
			setModalVisible(true);
			resetInput();
		} catch (error) {
			console.error(error);
		} finally {
			updateLoading(false);
		}
	};

	return (
		<>
			<form className="hero-order" onSubmit={onFormSubmit} id="main-page-hero-form">
				<div className="hero-order__inputs-container">
					<Select
						options={CLEANING_TYPES_SELECT}
						value={values.cleaningType}
						onChange={handleChange}
						label="Valymo tipas:"
						name="cleaningType"
					/>
					<Input
						label="Vardas:*"
						name="name"
						value={values.name}
						onChange={handleChange}
						isRequired
						requiredMessage="Įveskite vardą"
					/>
					<Select
						options={CLEANING_SERVICES_SELECT}
						value={values.service}
						onChange={handleChange}
						label="Paslauga:"
						name="service"
					/>
					<Input
						label="Telefono numeris:"
						name="phone"
						type="tel"
						value={values.phone}
						onChange={handleChange}
						isRequired
						requiredMessage="Įveskite tel. numerį"
					/>
				</div>
				<Button className="hero-order__button" type="submit" isLoading={isLoading}>
					Užsisakyti
				</Button>
			</form>
			<SuccessModal isOpen={isModalOpen} onClose={closeModal} />
		</>
	);
};

export default HeroOrder;
