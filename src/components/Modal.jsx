import React from 'react';
import cx from 'classnames';
import './Modal.scss';

const Modal = ({ children, isOpen = false, onClose, className }) => (
	<div
		className={cx({
			modal: true,
			[className]: className,
			'modal--open': isOpen,
		})}
	>
		<div
			className={cx({
				'modal-content': true,
				'modal-content--open': isOpen,
			})}
		>
			<button type="button" className="close" onClick={onClose}>
				&times;
			</button>
			{children}
		</div>
	</div>
);

export default Modal;
