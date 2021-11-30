import React from 'react';
import cx from 'classnames';
import './Input.scss';

const Input = ({ label, name, value, onChange, type = 'text', isRequired, requiredMessage }) => (
	<div className="input-container">
		<label htmlFor={name} className="input-container__label caption">
			{label}
		</label>
		<input
			type={type}
			id={name}
			name={name}
			value={value}
			onChange={onChange}
			className={cx({
				'input-container__input': true,
				small: true,
			})}
			required={isRequired}
		/>
	</div>
);

export default Input;
