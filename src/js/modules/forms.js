import {sendRequest} from './network';
import {workberBackEnd} from './config';
import * as storage from './storage';
import {appState} from './appState';
import clonedeep from 'lodash.clonedeep';

export const checkPassword = (passwords) => {
	let errorMessage = '';
	if (passwords.length > 1) {
		errorMessage = 'Passwords do not match';
	} else if (passwords.length == 0) {
		errorMessage = 'No password set ';
	} 
	return errorMessage;
};

export const showSignInfo = (infoContainer, errorMsg) => {
	infoContainer.textContent = '';
	errorMsg.forEach(item => infoContainer.innerHTML += `${Object.values(item).join('<br>')}`);
	infoContainer.classList.remove('d-none');
};

export const hideSignInfo = (infoContainer) => {
	infoContainer.textContent = '';
	infoContainer.classList.add('d-none');
};

export const submitSignForm = (form, errorSignSelector, modalSign, modalVerification) => {
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
		showSignInfo(form.querySelector(errorSignSelector), [{error: errorMsg}]);
		return false;
	}

	hideSignInfo(form.querySelector(errorSignSelector));

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
				showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
			} else if (data.success) {
				const objData = data.success;
				switch (objData.message) {
					case "user has logined":
						storage.setGlobalItem({
							sid: objData.sid,
							refresh_token: objData.refresh_token,
							lifetime: objData.lifetime,
						});
						modalSign.remove();
						appState.profile = clonedeep(objData.profile);
						break;
					case "regNewUser successful":
						// showModalVerification(modalSign, modalVerification);
						modalSign.remove();
						modalVerification.querySelector('#email').value = objData.user_email;
						modalVerification.querySelector('#code').value = '';
						document.body.append(modalVerification);
						break;
					default:
						break;
				}

			}
		});
	}
};

export const submitVerifyForm = (form, parentContainerClass, errorSignSelector, infoSignSelector) => {
	const formData = new FormData(form);
	const parentConatiner = form.closest(`.${parentContainerClass}`);

	hideSignInfo(form.querySelector(errorSignSelector));
	hideSignInfo(form.querySelector(infoSignSelector));

	formData.append('call', 'doCheckEmail');
	sendRequest(workberBackEnd, formData).then((data) => {
		if (data.error) {
			showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
		} else if (data.success) {
			const objData = data.success;
			storage.setGlobalItem({
				sid: objData.sid,
				refresh_token: objData.refresh_token,
				lifetime: objData.lifetime,
			});
			appState.profile = clonedeep(objData.profile);
			parentConatiner.querySelector('.menu__close').click();
		}
	});
};

export const submitResendForm = (form, errorSignSelector, infoSignSelector) => {
	const formData = new FormData(form);

	formData.append('call', 'doSendCode');
	hideSignInfo(form.querySelector(errorSignSelector));
	hideSignInfo(form.querySelector(infoSignSelector));

	sendRequest(workberBackEnd, formData).then((data) => {
		if (data.error) {
			showSignInfo(form.querySelector(errorSignSelector), data.error.errors);
		} else if (data.success) {
			const objData = data.success;
			showSignInfo(form.querySelector(infoSignSelector), [{0:'New code sent'}]);
		}
	});
};