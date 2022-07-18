import hash from 'object-hash';
import { hidePageElems, showPageElems, updatePostActionData, renderProfileButton, renderIcon, renderProfileHeader, renderButtons } from './domManipulation';
import { closeModalClass, closeSignModal, showModalMap, renderModalDeleteAccount } from './modal';
import {URImod, checkUserName, postAPIRequest, logout, deleteTemplate, getTemplate} from './appState';
import {hideSignInfo, showSignInfo} from './forms';
import {getPlaceByCoord} from './map';
import {maxDescriptionLength, maxHashtagsLength, MAX_WIDTH_AVATAR} from './config';
import {getNewSizeUploadedImages} from './domHelpers';


const faqContainer = 'profile-faq';

export const cropEditableContent = (el, contentCounterEl, maxLength) => {
	if (maxLength < el.innerText.trim().length) {
		el.innerText = el.innerText.trim().substring(0, maxLength);
		setCursorEnd(el);
	}
	contentCounterEl.innerText = `${el.innerText.length}/${maxLength}`;
};

const setCursorEnd = (el) => {
    const selection = window.getSelection();  
	const range = document.createRange();  
	selection.removeAllRanges();  
	range.selectNodeContents(el);  
	range.collapse(false);  
	selection.addRange(range);  
	el.focus();
}


export const renderProfile = ({contact_email, contact_phone, user_name, user_picture, user_descr, email, lat, lng, hashtagsList, contactsList, toggles}, settingsSelector, showControl) => {
	
	const dataOuterFlag = 'data-outer';
	
	const userAvatar = user_picture => user_picture ? user_picture : 'assets/workber_img/no-avatar.jpg';

	const localProfile = {
		hashagsList: JSON.parse(JSON.stringify(hashtagsList)),
		contactsList: JSON.parse(JSON.stringify(contactsList)),
		personalData: JSON.parse(JSON.stringify({
			contact_email, contact_phone, user_name, user_picture: userAvatar(user_picture), user_descr, email, lat, lng
		})),
	};

	let personalDataCheckSum = hash.MD5({contact_email, contact_phone, user_name, user_descr, lat, lng}),
		contactDataCheckSum = '',
		hashtagDataCheckSum = '';

	const renderTemplates = (templateCountElem, section, funcRenderSection, list) => {
		templateCountElem.textContent = list.length;
		section.textContent = '';
		section.append(funcRenderSection(list));
	};

	const profileProps = {
		hashtags: {
			// container: 'profile-hashtags',
			callback: renderTemplates
		},
		contacts: {
			// container: 'profile-contacts',
			callback: renderTemplates
		}
	};

	// const iconSettings = document.querySelector(settingsSelector);
	const profileContainer = document.createElement('section') ;

	profileContainer.classList.add('posts-block', 'profile-container');
	// profileContainer.dataset.container
	profileContainer.innerHTML = `
		<aside class="profile-sidebar">
			<div class="profile-user">
				<div class="profile-avatar">
					<img class="profile-sidebar__avatar img-avatar" src="" id="imgAvatar" alt="user avatar">
					<form action="#" method="POST" id="formSetAvatar">
						<input type="hidden" name="call" value="doSetAvatar">
						<input type="hidden" name="action" value="set">
						<input type="file" name="file" id="fileAvatar" accept="image/*" hidden>
							<a href="#" class="profile-avatar-change">
								<div class="profile-avatar-hint">
									${renderIcon("btn-photo", 24, "icon-photo")}
								<span>Change photo</span>
								</div>
							</a>
					</form>
				</div>
				<div class="profile-userName">
					<h2 id="titleUserName"></h2>
				</div>
				<hr class="divider">
				<ul class="profile-sidebar__menu profile-menu">
					<li data-container="profile-settings-main" class="menu-item active">Personal data</li>
					<li data-container="profile-contacts" class="menu-item">Contact information</li>
					<li data-container="profile-hashtags" class="menu-item">Hashtags</li>
					<li data-container="${faqContainer}" class="menu-item">F.A.Q</li>
					<!--<li data-container="profile-privacy" class="menu-item">Privacy</li>-->
					<li>
						<hr class="divider">
					</li>
					<li data-container="signout" class="menu-item">
						<div class="profile-signout">
							${renderIcon("btn-signout", 24)}
							Sign Out
						</div>
					</li>
					<li data-container="deleteAccount" class="menu-item">
						<div class="profile-signout">
							${renderIcon("btn-close", 24)}
							Delete account
						</div>
					</li>
				</ul>
			</div>
		</aside>
		<div class="profile-settings">
			<div class="profile-unit profile-settings-common profile-settings-main">
			</div>
			<div class="profile-unit profile-contacts d-none">
				<section class="profile-unit__top profile-top">
					<div class="profile-top-info">
						<span style="color: #9AA0A8;">Contacts templates: <span class="profile-entities" id="contactsTemplatesCount"></span>
						</span>
						<!--<button class="btn__form btn__add-contact btn__add-profile" data-modal="contactModalForm">Add new</button>-->
						${renderButtons("", [{
							type: "button",
							title: "Add new",
							classes: "btn__form btn__add-contact btn__add-profile",
							rawAttr: 'data-modal="contactModalForm"'
						}])}
					</div>
				</section>
				<section class="profile-item"></section>
			</div>
			<div class="profile-unit profile-settings-common profile-hashtags d-none">
				<section class="profile-unit__top profile-top">
					<div class="profile-top-info">
						<span style="color: #9AA0A8;">Hashtags templates: <span class="profile-entities" id="hashtagsTemplatesCount"></span>
						</span>
						<!--<button class="btn__form btn__add-hashtag btn__add-profile" data-modal="hashtagModalForm">Add new</button>-->
						${renderButtons("", [{
							type: "button",
							title: "Add new",
							classes: "btn__form btn__add-hashtag btn__add-profile",
							rawAttr: 'data-modal="hashtagModalForm"'
						}])}
					</div>
				</section>
				<section class="profile-item"></section>
			</div>
			<div class="profile-unit profile-settings-common ${faqContainer} d-none">
			</div>
			<div style="display:none;" class="profile-unit profile-settings-common profile-privacy d-none">
				<section class="profile-personal">
					<form action="#" class="privacyDataForm" id="privacyDataForm">
						<h3 class="profile-h3">Email Notifications</h3>
						<div class="cb-label-form">
							<!-- <div class="nameData__field1"> -->
							<input type="checkbox" name="cbSendEmail" id="cbSendEmail">
							<label for="cbSendEmail">Send me emails</label>
							<!-- </div> -->
						</div>
						<h3 class="profile-h3">Activity</h3>
						<div class="cb-label-form">
							<!-- <div class="nameData__field2"> -->
							<input type="checkbox" name="cbViewContacts" id="cbViewContacts">
							<label for="cbViewContacts">View my contacts</label>
							<!-- </div> -->
						</div>
						${renderButtons("form-profile-footer", [{
							type: "submit",
							title: "Save",
							classes: "btn__form btn__confirmation"
						}])}
					</form>
				</section>
			</div>
		</div>
	`;

	const renderModalHashtag = (dataOuterFlag, ...modalOverlayClass) => {
		const modal = document.createElement('div');

		modal.classList.add(...modalOverlayClass);
		modal.innerHTML = `
			<div class="templateModal modalContent">
				${renderProfileHeader('Add new hashtags template')}
				<div class="template__body">
					<form class="modal-form" action="#" method="POST" id="formNewHashtag">
						<input type="hidden" name="call" value="doSetHashtagTemplates">
						<input type="hidden" name="hashtagTemplateList" ${dataOuterFlag}>
						<div class="nameData" style="margin-bottom: 32px;">
							<div class="nameData__field1">
								<label for="templateName">Hashtag template name</label>
								<input type="text" class="input-form" name="templateName" id="templateName" required>
								<p class="errorSignMessage"></p>
							</div>
						</div>
						<div class="nameData-w-100">
							<div class="profileData__field2">
								<label for="hashtagTemplateList">Hashtags list <span class="editable-elem-chars color-pale" id="hashtagsCounter"></span></label>
								<div class="hashtags-list-full input-form" contenteditable="true" id="hashtagTemplateList">
								</div>
							</div>
						</div>
						${renderButtons("form-profile-footer", [{
							type: "submit",
							title: "Save",
							classes: "btn__form btn__confirmation"
						},
						{
							type: "reset",
							title: "Cancel",
							classes: "btn__form btn__confirmation"
						}])}
					</form>
				</div>
			</div>
		`;

		const modalForm = modal.querySelector('form');
		modal.addEventListener('click', function (e) {
			const target = e.target;
			if (!target.closest('.modalContent') || target.closest(`.${closeModalClass}`)) {
				this.querySelector('form').reset();
				closeSignModal(this);
			}
		});

		modalForm.querySelector('#hashtagTemplateList').addEventListener('paste', function (e) {
			e.preventDefault();
			e.target.innerText = window.event.clipboardData.getData('text/plain');
			this.dispatchEvent(new Event('keyup'));
		});

		modalForm.querySelector('#hashtagTemplateList').addEventListener('keyup', function (e) {
			cropEditableContent(e.target, modalForm.querySelector('#hashtagsCounter'), maxHashtagsLength);
		});

		modalForm.addEventListener('reset', (e) => {
			const target = e.target;
			hideSignInfo(target.querySelector('.errorSignMessage'));
			target.querySelector('#hashtagTemplateList').textContent = '';
			target.querySelector('#hashtagsCounter').textContent = '';
		});

		modalForm.addEventListener('submit', (e) => {
			const target = e.target;
			e.preventDefault();
			submitHashtagForm(target, dataOuterFlag, document.querySelector(`.${modalOverlayClass}`));
		});

		return modal;
	};

	const renderModalContact = (dataOuterFlag, ...modalOverlayClass) => {
		const modal = document.createElement('div');

		modal.classList.add(...modalOverlayClass);
		modal.innerHTML = `
			<div class="templateModal modalContent">
				${renderProfileHeader('Add new contacts template')}
				<div class="template__body">
					<form action="#" class="profile__dataform profileDataForm" id="formNewContact">
						<input type="hidden" name="call" value="doSetContactsTemplates">
						<div class="nameData">
							<div class="profileData__field1">
								<label for="newContactName">Contacts template name</label>
								<input type="text" class="input-form" name="templateName" id="newContactName" required>
								<p class="errorSignMessage"></p>
							</div>
						</div>
						<div class="nameData">
							<div class="nameData-w-60 profileData__field3">
								<label for="newContactEmail">Email</label>
								<input type="email" class="input-form" name="contact_email" id="newContactEmail">
							</div>
							<div class="nameData-wrap nameData-w-30 profileData__field2">
								<label for="newContactPhone">Phone</label>
								<input type="text" class="input-form" name="phone" id="newContactPhone">
							</div>
						</div>
						<div class="nameData">
							<div class="nameData-w-100 profileData__field5">
								<label for="newAddress">Address</label>
								<input type="text" class="input-form" name="address" id="newAddress">
							</div>
						</div>
						${renderButtons("form-profile-footer", [{
							type: "submit",
							title: "Save",
							classes: "btn__form btn__confirmation"
						},
						{
							type: "reset",
							title: "Cancel",
							classes: "btn__form btn__confirmation"
						}])}
					</form>
				</div>
			</div>
		`;

		modal.addEventListener('click', function (e) {
			const target = e.target;
			if (!target.closest('.modalContent') || target.closest(`.${closeModalClass}`)) {
				this.querySelector('form').reset();
				closeSignModal(this);
			}
		});

		modal.querySelector('form').addEventListener('reset', (e) => {
			const target = e.target;
			hideSignInfo(target.querySelector('.errorSignMessage'));
		});

		modal.querySelector('form').addEventListener('submit', (e) => {
			const target = e.target;
			e.preventDefault();
			submitContactForm(target, dataOuterFlag, document.querySelector(`.${modalOverlayClass}`));
		});

		return modal;
	}

	const submitHashtagForm = (form, dataOuterFlag, modal = null) => {
		const requestProps = {};
		const formData = new FormData(form);
		// let call = 'doSetHashtagTemplates';
		let fieldValue = '';
		for (let [key, value] of formData.entries()) {
			fieldValue = value;
			if (form.elements[key].getAttribute('type') === 'hidden' &&
				form.elements[key].getAttribute(dataOuterFlag) !== null) {
				try {
					fieldValue = form.querySelector(`#${key}`).textContent.trim()
						.split(" ")
						.map((item) => {
							if (item.substring(0,1) != '#') {
								item = '#' + item;
							}
							return item;
						})
						.join(' ');
				} catch (e) {
					if (e instanceof TypeError) {
						console.error(e.message + `, Element ${key} can't find container with data`);
					} else {
						throw e;
					}
				}
			}
			// if (key === 'id') {
			// 	call = 'doUpdHashtagTemplates';
			// }
			requestProps[key] = fieldValue;
		}
		// requestProps.call = call;
		if (requestProps.templateName && requestProps.templateName.trim() !== '' 
			&& requestProps.hashtagTemplateList.length > 3
			&& hashtagDataCheckSum !== hash.MD5({
				templateName: requestProps.templateName,
				hashtagTemplateList: requestProps.hashtagTemplateList,
			})) {
			postAPIRequest(requestProps).then((data) => {
				hideSignInfo(form.querySelector('.errorSignMessage'));
				if (data.message == "hashtag list updating error" || 
					data.message == "hashtag list adding error") {
					showSignInfo(form.querySelector('.errorSignMessage'), data.errors);
					return false;
				}
				getTemplate('hashtag').then((data) => {
					if (modal) {
						modal.querySelector(`.${closeModalClass}`).click();
					}
					localProfile.hashagsList = JSON.parse(JSON.stringify(data.hashtagsList));
					profileProps.hashtags.callback(hashtagsTemplatesCount, hashtagSection, renderHashtagSection, localProfile.hashagsList);
				});
			});
		}
	};

	const submitContactForm = (form, dataOuterFlag, modal = null, hiddenAttrHandler = null) => {
		const requestProps = {};
		const formData = new FormData(form);
		let fieldValue = '';
		for (let [key, value] of formData.entries()) {
			fieldValue = value;
			if (form.elements[key].getAttribute('type') === 'hidden' &&
				form.elements[key].getAttribute(dataOuterFlag) !== null) {
				try {
					fieldValue = form.querySelector(`#${key}`).textContent.trim();
					if (hiddenAttrHandler) {
						fieldValue = hiddenAttrHandler(fieldValue);
					}
				} catch (e) {
					if (e instanceof TypeError) {
						console.error(e.message + `, Element ${key} can't find container with data`);
					} else {
						throw e;
					}
				}
			}
			requestProps[key] = fieldValue;
		}

		if (requestProps.templateName && requestProps.templateName.trim() !== '' 
			&&  contactDataCheckSum !== hash.MD5({
				templateName: requestProps.templateName,
				contact_email: requestProps.contact_email,
				phone: requestProps.phone,
				address: requestProps.address
			})) {
			postAPIRequest(requestProps).then((data) => {
				hideSignInfo(form.querySelector('.errorSignMessage'));
				if (data.message == "contact update failed" || 
					data.message == "contact adding error") {
					showSignInfo(form.querySelector('.errorSignMessage'), data.errors);
					return false;
				}
				getTemplate('contact').then((data) => {
					if (modal) {
						modal.querySelector(`.${closeModalClass}`).click();
					}
					localProfile.contactsList = JSON.parse(JSON.stringify(data.contactsList));
					profileProps.contacts.callback(contactsTemplatesCount, contactSection, renderContactSection, localProfile.contactsList);
				});
			});
		}
	};

	const submitSettingsForm = (form, blob = null) => {
		const requestProps = {};
		const formData = new FormData(form);
		let fieldValue = '';
		for (let [key, value] of formData.entries()) {
			fieldValue = value;
			if (form.elements[key].getAttribute('type') === 'hidden' &&
				form.elements[key].getAttribute(dataOuterFlag) !== null) {
				try {
					fieldValue = form.querySelector(`#${key}`).textContent.trim();
				} catch (e) {
					if (e instanceof TypeError) {
						console.error(e.message + `, Element ${key} can't find container with data`);
					} else {
						throw e;
					}
				}
			}
			try {
				if (typeof fieldValue === 'object' && form.elements[key].type === 'file' && blob) {
					requestProps[key] = blob;
				} else if (fieldValue.trim() !== '') {
					requestProps[key] = fieldValue;
				}
			} catch (e) {}
		}
		if (personalDataCheckSum !== hash.MD5({
				contact_email: requestProps.contact_email,
				contact_phone: requestProps.phone, 
				user_name: requestProps.user_name,
				user_descr: requestProps.user_descr,
				lat: parseFloat(requestProps.lat),
				lng: parseFloat(requestProps.lng),
			})) {
				postAPIRequest(requestProps).then((data) => {
				if (data.errors) {
				}
				else if (data.code && data.code === 1) {
					if ( data.message === "avatar set") {
						localProfile.personalData.user_picture = userAvatar(data.user_picture);
					} else {
						personalDataCheckSum = hash.MD5({
							contact_email: data.profile.contact_email,
							contact_phone: data.profile.contact_phone, 
							user_name: data.profile.user_name,
							user_descr: data.profile.user_descr,
							lat: data.profile.lat,
							lng: data.profile.lng,
						});
						localProfile.personalData = JSON.parse(JSON.stringify({
							contact_email: data.profile.contact_email, 
							contact_phone: data.profile.contact_phone, 
							user_name: data.profile.user_name, 
							user_picture: userAvatar(data.profile.user_picture),
							user_descr: data.profile.user_descr, 
							email: data.profile.email,
							lat: data.profile.lat,
							lng: data.profile.lng,
						}));
					}
					refreshPersonalForm();
				}
			});
		}

	};

	const renderHashtagForm = (dataOuterFlag) => {
		const formContainer = document.createElement('div');
		formContainer.classList.add('profile-item-detail', 'border-elements');
		formContainer.insertAdjacentHTML('beforeend', `
			<form action="#" class="profile__dataform hashtagsDataForm" id="hashtagsDataForm">
				<input type="hidden" name="call" value="doUpdHashtagTemplates">
				<input type="hidden" name="id" value="" id="id">
				<input type="hidden" name="hashtagTemplateList" ${dataOuterFlag}>
				<div class="nameData" style="margin-top: 0;">
					<div class="profileData__field1">
						<label for="templateName">Hashtag template name</label>
						<input type="text" class="input-form" name="templateName" id="templateName" value="" required>
						<p class="errorSignMessage"></p>
					</div>
				</div>
				<div class="nameData nameData-w-100">
					<div class="nameData-w-100 profileData__field2">
						<label for="hashtagTemplateList">Hashtags list <span class="editable-elem-chars color-pale" id="hashtagsCounter"></span></label>
						<div class="hashtags-list-full input-form" contenteditable="true"
							id="hashtagTemplateList">
						</div>
					</div>
				</div>
				${renderButtons("form-profile-footer", [{
					type: "submit",
					title: "Save",
					classes: "btn__form btn__confirmation"
				}])}
			</form>
		`);
		
		formContainer.querySelector('#hashtagTemplateList').addEventListener('paste', function (e) {
			e.preventDefault();
			e.target.innerText = window.event.clipboardData.getData('text/plain');
			this.dispatchEvent(new Event('keyup'));
		});

		formContainer.querySelector('#hashtagTemplateList').addEventListener('keyup', function (e) {
			cropEditableContent(e.target, formContainer.querySelector('#hashtagsCounter'), maxHashtagsLength);
		});

		return formContainer;
	};

	const renderContactForm = () => {
		const formContainer = document.createElement('div');
		formContainer.classList.add('profile-item-detail', 'border-elements');
		formContainer.insertAdjacentHTML('beforeend', `
			<form action="#" class="profile__dataform profileDataForm" id="profileDataForm">
				<input type="hidden" name="call" value="doUpdContactsTemplates">
				<input type="hidden" name="id" value="" id="contact_id">
				<div class="nameData" style="margin-top: 0;">
					<div class="profileData__field1">
						<label for="contactName">Contacts template name</label>
						<input type="text" class="input-form" name="templateName" id="contactName" required>
						<p class="errorSignMessage"></p>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-60 profileData__field3">
						<label for="contactEmail">Email</label>
						<input type="email" class="input-form" name="contact_email" id="contactEmail">
					</div>
					<div class="nameData-wrap nameData-w-30 profileData__field2">
						<label for="contactPhone">Phone</label>
						<input type="text" class="input-form" name="phone" id="contactPhone">
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-100 profileData__field5">
						<label for="address">Address</label>
						<input type="text" class="input-form" name="address" id="address">
					</div>
				</div>
				${renderButtons("form-profile-footer", [{
					type: "submit",
					title: "Save",
					classes: "btn__form btn__confirmation"
				}])}
			</form>
		`);
		return formContainer;
	};

	const renderFAQForm = (toggles, faqContainer) => {
		const mainContainer = document.createElement("div"),
			formContainer = document.createElement("div"), 
			descrContainer = document.createElement("div");

		mainContainer.style = 'display:flex';
		formContainer.classList.add(
			`${faqContainer}__content`,
			`${faqContainer}__content_active`
		);
		descrContainer.classList.add(`${faqContainer}__description`);

		let faq_list = '';

		for (let toggle of toggles) {
			if (toggle.key_id === "faq") {
				try {
					const pages = JSON.parse(toggle.value).pages;
					for (let faq of pages) {
						faq_list += `<li class="${faqContainer}__menu"><a href="${faq.pageUrl}">${faq.title}</a></li>`;
					}
				} catch (e) {
					console.log(e);
				}
				break;
			}
		}

		formContainer.insertAdjacentHTML('beforeend', `
			<h3 class="profile-h3">F.A.Q</h3>
			<ul>${faq_list}</ul>
		`
		);

		mainContainer.append(formContainer, descrContainer);
		return mainContainer.outerHTML;
	};
	
	const renderPersonalForm = ((dataOuterFlag) => {
		const formContainer = document.createElement('section');

		formContainer.classList.add('profile-personal');
		formContainer.insertAdjacentHTML('beforeend', `
			<h3 class="profile-h3">Personal Data</h3>
			<form action="#" class="personalDataForm" id="personalDataForm" data-batch>
			<input type="hidden" name="call" value="doUpdateProfile">
			<input type="hidden" name="lat" id="lat">
			<input type="hidden" name="lng" id="lng">
			<input type="hidden" name="user_descr" ${dataOuterFlag}>
				<div class="nameData">
					<div class="nameData__field1">
						<label for="user_name">Username (required)</label>
						<input type="text" class="input-form" name="user_name" id="user_name" value="" required>
						<p class="errorSignMessage"></p>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-100 nameData__field3">
						<label for="user_descr">Description <span
								class="editable-elem-chars color-pale" id="descriptionCounter"></span></label>
						<div class="profile-description input-form" contenteditable="true" id="user_descr"></div>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-60 nameData__field1">
						<label for="email">Email</label>
						<input type="email" class="input-form" name="email" id="email" disabled>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-100 nameData__field2">
						<label for="homeLocation">Home location</label>
						<!--<input type="text" class="input-form" name="homeLocation" id="homeLocation" disabled>-->
						<div class="input-form" id="homeLocation">&nbsp;</div>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-60 nameData__field1">
						<label for="contact_email">Email (public)</label>
						<input type="email" class="input-form" name="contact_email" id="contact_email" value="">
					</div>
					<div class="nameData-wrap nameData-w-30 nameData__field1">
						<label for="phone">Phone (public)</label>
						<input type="text" class="input-form" name="phone" id="phone" value="">
					</div>
				</div>
				${renderButtons("form-profile-footer", [{
					type: "submit",
					title: "Save",
					classes: "btn__form btn__confirmation"
				}])}
			</form>
			`
		);

		const userName = formContainer.querySelector('#user_name');

		const hasNameChanged = () => {
			const user_name = userName.value.trim();
			if (localProfile.personalData.user_name !== user_name && user_name !== '') {
				hideSignInfo(formContainer.querySelector('.errorSignMessage'));
				checkUserName(user_name).then((data) => {
					if (data.message === 'error user_name') {
						showSignInfo(formContainer.querySelector('.errorSignMessage'), data.errors);
					}
				});
			}
		};

		userName.addEventListener('blur', hasNameChanged);

		formContainer.querySelector('#user_descr').addEventListener('paste', function (e) {
			e.preventDefault();
			e.target.innerText = window.event.clipboardData.getData('text/plain');
			this.dispatchEvent(new Event('keyup'));
		});

		formContainer.querySelector('#user_descr').addEventListener('keyup', function (e) {
			cropEditableContent(e.target, formContainer.querySelector('#descriptionCounter'), maxDescriptionLength);
		});

		formContainer.querySelector('#homeLocation').addEventListener('click', (e) => {
			e.preventDefault();
			showModalMap({
				form: formContainer,
				lat: '#lat',
				lng: '#lng',
				homeLocation: '#homeLocation'
			});
		});

		return formContainer;
	});

	function renderContactSection(contactsList) {
		const section = document.createElement('div');
		contactsList.forEach((item) => {
			const header = `
				<div class="profile-item-wrapper" data-id="${item.id}">
					<div class="profile-unit__item profile-item-info border-elements">
						<div class="profile-unit__item__main profile-main-info">
							<div class="profile-main-info__text profile-main-name profile-name">${item.templateName}</div>
							<div class="profile-main-info__text profile-main-phone profile-phone">${item.phone}</div>
							<div class="profile-main-info__text profile-main-address profile-address">${item.address}</div>
							<div class="profile-email" style="display:none;">${item.contact_email}</div>
						</div>
						<div class="profile-unit__item__buttons profile-buttons">
							${renderProfileButton('profile-button d-none', 'data-id="' + item.id + '" data-default="none" data-showned=""  data-delete="contact"', 'icon__profile-open', 'btn-trash')}
							${renderProfileButton('profile-button d-none', 'data-default="none"', 'icon__profile-open', 'btn-toggleup')}
							${renderProfileButton('profile-button', 'data-showned="down"', 'icon__profile-close', 'btn-toggledown')}
						</div>
					</div>
				</dir>
			`;
			section.insertAdjacentHTML('beforeend', header);
		});

		section.querySelectorAll('.profile-buttons').forEach((item)=> {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				const target = e.target;
				const button = target.closest('.profile-button');
				const parent = target.closest('.profile-item-wrapper');

				if (button) {
					const btnDelete = button.getAttribute('data-delete');
					if (btnDelete !== null) {
						deleteTemplate(btnDelete, button.dataset.id).then(() => {
							getTemplate(btnDelete).then((data) => {
								localProfile.contactsList = JSON.parse(JSON.stringify(data.contactsList));
								profileProps.contacts.callback(contactsTemplatesCount, contactSection, renderContactSection, localProfile.contactsList);				
							});
						});
						return;
					}
					contactForm.remove();
					section.querySelectorAll('.profile-item .profile-item-wrapper').forEach((wrapper) => {
						wrapper.querySelectorAll('.profile-buttons a').forEach((item) => {
							if (item.dataset.default === 'none') {
								item.classList.add('d-none');
							} else {
								item.classList.remove('d-none');
							}
						});
					});
					if (button.dataset.showned === 'down') {
						parent.append(fillForm(contactForm, [
							{id: '#contact_id', inputType: 'value', value: parent.dataset['id']},
							{id: '#contactName', inputType: 'value', value: parent.querySelector('.profile-name').textContent},
							{id: '#contactPhone', inputType: 'value', value: parent.querySelector('.profile-phone').textContent},
							{id: '#address', inputType: 'value', value: parent.querySelector('.profile-address').textContent},
							{id: '#contactEmail', inputType: 'value', value: parent.querySelector('.profile-email').textContent},
						]));
						contactDataCheckSum = hash.MD5({
							templateName: parent.querySelector('.profile-name').textContent,
							contact_email: parent.querySelector('.profile-email').textContent,
							phone: parent.querySelector('.profile-phone').textContent,
							address: parent.querySelector('.profile-address').textContent
						});
						parent.querySelectorAll('.profile-buttons a').forEach((item) => {
							item.classList.toggle('d-none');
						});
					} else if (button.dataset.showned === 'up') {
						contactForm.remove();
					}
				}
			});
		});

		return section;
	}

	function renderHashtagSection(hashtagsList) {
		const section = document.createElement('div');
		hashtagsList.forEach((item) => {
			const hastagHeader = `
			<div class="profile-item-wrapper" data-id="${item.id}">
				<div class="profile-unit__item profile-item-info border-elements">
					<div class="profile-main-info">
						<div class="profile-main-info__text profile-name">${item.templateName}</div>
						<div class="hashtags-list-cutted d-none">${item.hashtagList}</div>
					</div>
					<div class="profile-buttons">
						${renderProfileButton('profile-button d-none', 'data-id="' + item.id + '" data-default="none" data-showned="" data-delete="hashtag"', 'icon__profile-open', 'btn-trash')}
						${renderProfileButton('profile-button d-none', 'data-default="none" data-showned="up"', 'icon__profile-open', 'btn-toggleup')}
						${renderProfileButton('profile-button', 'data-showned="down"', 'icon__profile-close', 'btn-toggledown')}
					</div>
				</div>
			</div>
			`;
			section.insertAdjacentHTML('beforeend', hastagHeader);
		});

		section.querySelectorAll('.profile-buttons').forEach((item)=> {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				const target = e.target;
				const button = target.closest('.profile-button');
				const parent = target.closest('.profile-item-wrapper');

				if (button) {
					const btnDelete = button.getAttribute('data-delete');
					if (btnDelete !== null) {
						deleteTemplate(btnDelete, button.dataset.id).then(() => {
							getTemplate(btnDelete).then((data) => {
								localProfile.hashagsList = JSON.parse(JSON.stringify(data.hashtagsList));
								profileProps.hashtags.callback(hashtagsTemplatesCount, hashtagSection, renderHashtagSection, localProfile.hashagsList);				
							});
						});
						return;
					}
					hashtagForm.remove();
					section.querySelectorAll('.profile-item .profile-item-wrapper').forEach((wrapper) => {
						wrapper.querySelectorAll('.profile-buttons a').forEach((item) => {
							if (item.dataset.default === 'none') {
								item.classList.add('d-none');
							} else {
								item.classList.remove('d-none');
							}
						});
					});
					if (button.dataset.showned === 'down') {
						parent.append(fillForm(hashtagForm, [
							{id: '#id', inputType: 'value', value: parent.dataset['id']},
							{id: '#templateName', inputType: 'value', value: parent.querySelector('.profile-name').textContent},
							{id: '#hashtagTemplateList', inputType: 'content', value: parent.querySelector('.hashtags-list-cutted').textContent}
						]));
						hashtagDataCheckSum = hash.MD5({
							templateName: parent.querySelector('.profile-name').textContent,
							hashtagTemplateList: parent.querySelector('.hashtags-list-cutted').textContent
						});
						parent.querySelectorAll('.profile-buttons a').forEach((item) => {
							item.classList.toggle('d-none');
						});
					} else if (button.dataset.showned === 'up') {
						hashtagForm.remove();
					}
								
				}
			});
		});
		return section;
	}

	const hashtagForm = renderHashtagForm(dataOuterFlag),
		contactForm = renderContactForm(),
		personalForm = renderPersonalForm(dataOuterFlag);


	const modalForms = {};
	modalForms.hashtagModalForm = renderModalHashtag(dataOuterFlag, 'modal-overlay', 'hashtagModalForm');
	modalForms.contactModalForm = renderModalContact(dataOuterFlag, 'modal-overlay', 'contactModalForm');

	const fillForm = (formContainer, formData) => {
		try {
			formContainer.querySelector('form').reset();
			hideSignInfo(formContainer.querySelector('form').querySelector('.errorSignMessage'));
		} catch (e) {}
		for (const item of formData) {
			try {
				const formInput = formContainer.querySelector(item.id);
				switch (item.inputType) {
					case 'value':
						formInput.value = item.value;
						break;
					case 'content':
						formInput.textContent = item.value;
						break;
				}
			} catch (e) {}
		}
		return formContainer;
	};

	const refreshPersonalForm =  () => {
		personalForm.remove();
		const smallAvatar = document.querySelector(settingsSelector);
		smallAvatar.textContent = '';
		smallAvatar.insertAdjacentHTML('beforeend',`
			<img class="profile-avatar-small" src="${localProfile.personalData.user_picture}" alt="user avatar">
		`);
		smallAvatar.classList.remove('d-none');
		
		getPlaceByCoord(localProfile.personalData.lat, localProfile.personalData.lng)
			.then((place) => {
				profileContainer.querySelector('#homeLocation').textContent = place;
			});
		profileContainer.querySelector('#imgAvatar').src = localProfile.personalData.user_picture;
		profileContainer.querySelector('#titleUserName').textContent = localProfile.personalData.user_name;
		profileContainer.querySelector('.profile-settings-main').append(fillForm(personalForm, [
			{id: '#user_name', inputType: 'value', value: localProfile.personalData.user_name},
			{id: '#user_descr', inputType: 'content', value:localProfile.personalData. user_descr},
			{id: '#email', inputType: 'value', value: localProfile.personalData.email},
			{id: '#contact_email', inputType: 'value', value: localProfile.personalData.contact_email},
			{id: '#phone', inputType: 'value', value: localProfile.personalData.contact_phone},
			{id: '#lat', inputType: 'value', value: localProfile.personalData.lat},
			{id: '#lng', inputType: 'value', value: localProfile.personalData.lng},
		]));
		
	};

	const hashtagSection = profileContainer.querySelector('.profile-hashtags .profile-item'),
		contactSection = profileContainer.querySelector('.profile-contacts .profile-item'),
		profileAvatar = profileContainer.querySelector('.profile-avatar-change'),
		formSetAvatar = profileContainer.querySelector('#formSetAvatar'),
		hashtagsTemplatesCount = profileContainer.querySelector('#hashtagsTemplatesCount'),
		contactsTemplatesCount = profileContainer.querySelector('#contactsTemplatesCount'),
		fileAvatar = formSetAvatar.querySelector('#fileAvatar');

	refreshPersonalForm();
	profileContainer.querySelector(`.${faqContainer}`).innerHTML = renderFAQForm(
		toggles,
		faqContainer
	);
	profileContainer.querySelector(`.${faqContainer} ul`).addEventListener("click", function (e) {
		e.preventDefault();
		const target = e.target;
		const href = target.closest('a');
		if (href) {
			const iframe = document.createElement('iframe');
			iframe.style = "width:100%;min-height:600px;border:none;";
			iframe.src = href.href;
			profileContainer.querySelector(`.${faqContainer}__description`).textContent = "";
			profileContainer.querySelector(`.${faqContainer}__description`).append(iframe);
			setActiveMenuItem(this.querySelectorAll('li'), href.closest('li'), `${faqContainer}__menu_active`);
		}
	});

	profileContainer.querySelectorAll('.btn__add-profile').forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();
			const target = e.target;
			if (modalForms[target.dataset['modal']]) {
				document.body.append(modalForms[target.dataset['modal']]);
			}
		});
	});

	hashtagForm.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		submitHashtagForm(e.target, dataOuterFlag);
	});

	contactForm.querySelector('form').addEventListener('submit', (e) => {
		e.preventDefault();
		submitContactForm(e.target, dataOuterFlag);
	});

	formSetAvatar.addEventListener('submit', (e) => {
		e.preventDefault();
		submitSettingsForm(e.target);
	});

	fileAvatar.addEventListener('change', (e) => {
		resizeAndPostImage(e.target, submitSettingsForm);
	});

	profileContainer.querySelectorAll('form').forEach((form) => {
		if (form.getAttribute('data-batch') !== null) {
			form.addEventListener('submit', (e) => {
				e.preventDefault();
				submitSettingsForm(e.target);
			});
		}
	});

	profileAvatar.addEventListener('click', (e) => {
		e.preventDefault();
		fileAvatar.click();
	});

	profileContainer.querySelector('.profile-menu').addEventListener('click', (e) => {
		const target = e.target;
		const menuItem = target.closest('.menu-item');
		if (menuItem) {
			try {
				if (menuItem.dataset['container'] === 'signout') {
					logout().then(() => {
						location.reload();
					});
					return false;
				} else if (menuItem.dataset['container'] === 'deleteAccount') {
					document.body.append(renderModalDeleteAccount('modal-overlay'));
					return false;
				}
				profileContainer.querySelectorAll('.profile-unit').forEach((item) => {
					item.classList.add('d-none');
				});
				profileContainer.querySelector(`.${menuItem.dataset['container']}`).classList.remove('d-none');
				profileProps.hashtags.callback(hashtagsTemplatesCount, hashtagSection, renderHashtagSection, localProfile.hashagsList);
				profileProps.contacts.callback(contactsTemplatesCount, contactSection, renderContactSection, localProfile.contactsList);
				setActiveMenuItem(profileContainer.querySelectorAll('.profile-menu>LI'), menuItem, 'active');
			} catch (e) {
				// console.error(e);
			}
			
		}
	});

	return profileContainer;
};

/**
 * handle events for likes and favorites buttons
 * @module domElements
 * @param {DOM} elem
 * @param {string} postDocumentId
 * @return {void}
 */
export const handlePostBtn = (elem, postDocumentId = null) => {
	const btn = elem.closest('.post-action');
	const favoriteClass = 'favorite';
	if (btn && btn.getAttribute('data-call')) {
		const requestProps = {};
		requestProps.call = btn.getAttribute('data-call');
		requestProps.postid = btn.getAttribute('data-postid');
		requestProps[btn.getAttribute('data-param')] = btn.getAttribute('data-value');
		postAPIRequest(requestProps).then((data) => {
			if (data.message === 'like changed') {
				btn.querySelector('.likes_out').innerText = data.likes;
				if (btn.getAttribute('data-value') === '0') {
					btn.classList.remove('like-selected');
					btn.setAttribute('data-value', '1');
					btn.querySelector('.icon').classList.remove('icon-selected');
				} else {
					btn.classList.add('like-selected');
					btn.setAttribute('data-value', '0');
					btn.querySelector('.icon').classList.add('icon-selected');
				}
				updatePostActionData(postDocumentId, {
					'.post-like': data.likes,
					'.post-is_likes': (btn.getAttribute('data-value') === '1') ? '0' : '1'
				});
			} else if (data.message === 'bookmarks changed') {
				if (btn.getAttribute('data-value') === '0') {
					// btn.querySelector('.save_out').innerText = 'SAVE';
					btn.querySelector('.save_out').style.display = '';
					btn.classList.remove('save-selected');
					btn.setAttribute('data-value', '1');
					btn.querySelector('.icon').classList.remove('icon-selected');
					try
					{
						const postItem = btn.closest(`.${favoriteClass}`);
						postItem.classList.add('post-deleting');
						setTimeout(() => {
							postItem.remove();
						}, 700);
					} catch (e) {}
				} else {
					// btn.querySelector('.save_out').innerText = '';
					btn.querySelector('.save_out').style.display = 'none';
					btn.classList.add('save-selected');
					btn.setAttribute('data-value', '0');
					btn.querySelector('.icon').classList.add('icon-selected');
				}
				updatePostActionData(postDocumentId, {
					'.post-is_bookmarks': (btn.getAttribute('data-value') === '1') ? '0' : '1'
				});
			}
		});
	}
};

const resizeAndPostImage = (imageInput, callback) => {
	const form = imageInput.closest('form');
	const reader = new FileReader();
	reader.readAsDataURL(imageInput.files[0]);
	reader.onloadend = function (e) {
		const myImage = new Image();
		myImage.src = e.target.result;
		myImage.onload = function (ev) {
			const [width, height] = getNewSizeUploadedImages(myImage.width, myImage.height, MAX_WIDTH_AVATAR);
			const myCanvas = document.createElement('canvas');
			const myContext = myCanvas.getContext("2d");
			myCanvas.width = width; 
			myCanvas.height = height;
			myContext.drawImage(myImage, 0, 0, width, height);
			myCanvas.toBlob(function (blob) {
				blob.name = imageInput.files[0].name;
				callback(form, blob);
			}, 'image/jpeg', 0.95);
		};
	};
};

/**
 * set active class for menu item
 * @module domElements
 * @param {DOMCollection} menuList
 * @param {DOM} activeMenuItem
 * @param {string} classActiveName
 * @return {void}
 */
const setActiveMenuItem = (menuList, activeMenuItem, classActiveName) => {
	menuList.forEach((item) => {
		item.classList.remove(classActiveName);
	});
	activeMenuItem.classList.add(classActiveName);
}