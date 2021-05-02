import * as React from 'react';
import './Input.scss';

const Input = ({label, className}) => (
	<div>
		<label>{label}</label>
		<input className={`input ${className}`}/>
	</div>
)

export default Input;
