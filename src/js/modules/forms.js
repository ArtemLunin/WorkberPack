import {sendRequest} from './network';
import {workberBackEnd} from './config';
import {renderModalVerification} from './modal';

export const checkPassword = (passwords) => {
	let errorMessage = '';
	if (passwords.length > 1) {
		errorMessage = 'Passwords do not match';
	} else if (passwords.length == 0) {
		errorMessage = 'No password set ';
	} 
	return errorMessage;
};

export const showSignError = (errorContainer, errorMsg) => {
	errorContainer.textContent = errorMsg;
	errorContainer.classList.remove('d-none');
};

export const hideSignError = (errorContainer) => {
	errorContainer.textContent = '';
	errorContainer.classList.add('d-none');
};

export const submitSignForm = (form, errorSignSelector, modalOverlayClass, modalOverlay) => {
	const btnSubmit = document.activeElement;
	const passwords = new Set();
	let errorMsg = '';
	let call = '';
	const formData = new FormData(form);
	for (let [key, value] of formData.entries()) {
		if (form.elements[key].getAttribute('type') === 'password') {
			passwords.add(value);
		}
	}
	errorMsg = checkPassword([...passwords]);
	if (errorMsg !== '') {
		showSignError(form.querySelector(errorSignSelector), errorMsg);
		return false;
	}

	hideSignError(form.querySelector(errorSignSelector));

	if (btnSubmit.getAttribute('type') === 'submit') {
		let typeSubmit = btnSubmit.getAttribute('id');
		switch (typeSubmit) {
			case 'btn__sign-up':
				call = 'reg_nu';
				break;
			case 'btn__sign-in':
				call = 'login';
				break;
			default:
				return false;
		}
		formData.append('call', call);
		sendRequest(workberBackEnd, formData).then((data) => {
			if (data.error) {
				showSignError(form.querySelector(errorSignSelector), data.error.errors[0].email);
			} else if (data.success) {
				showModalVerification(modalOverlay, modalOverlayClass)
			}
		});
	}
};

const showModalVerification = (prevModalOverlay, modalOverlayClass) => {
	const modalOverlay = renderModalVerification(modalOverlayClass);
	prevModalOverlay.remove();
	document.body.append(modalOverlay);
}