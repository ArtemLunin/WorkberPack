// import clonedeep from 'lodash.clonedeep';
import {hidePageElems} from './domManipulation';
import {closeSignModal} from './modal';
import {URImod, deleteHashtagTemplate, getHashtagTemplate, postAPIRequest, logout} from './appState';
// import * as storage from './storage';

export const renderProfile = ({contact_email, contact_phone, user_name, user_picture, user_descr, email, hashtagsList}, settingsSelector, showControl) => {
	
	const dataOuterFlag = 'data-outer';
	
	const userAvatar = user_picture => user_picture ? user_picture : 'assets/workber_img/big_avatar.jpeg';

	const localProfile = {
		hashagsList: JSON.parse(JSON.stringify(hashtagsList)),
		personalData: JSON.parse(JSON.stringify({
			contact_email, contact_phone, user_name, user_picture: userAvatar(user_picture), user_descr, email
		})),
	};

	const renderHashtags = (section, list) => {
		hashtagsTemplatesCount.textContent = list.length;
		section.textContent = '';
		section.append(renderHashtagSection(list));
	};

	const profileProps = {
		'hashtags': {
			container: 'profile-hashtags',
			callback: renderHashtags
		}
	};

	const iconSettings = document.querySelector(settingsSelector);
	const profileContainer = document.createElement('section') ;


	// const hashtagsTemplatesCount = hashtagsList.length;

	profileContainer.classList.add('posts-block', 'profile-container');
	profileContainer.innerHTML = `
		<aside class="profile-sidebar">
			<div class="profile-user">
				<div class="profile-avatar">
					<img class="img-avatar" src="" id="imgAvatar" alt="user avatar">
					<form action="#" method="POST" id="formSetAvatar">
						<input type="hidden" name="call" value="doSetAvatar">
						<input type="hidden" name="action" value="set">
						<input type="file" name="file" id="fileAvatar" accept="image/*" hidden>
							<a href="#" class="profile-avatar-change">
								<div class="profile-avatar-hint">
									<svg width="24" height="24" class="icon icon-photo">
											<use xlink:href="assets/workber_img/icons.svg#btn-photo"></use>
									</svg>
								<span>Change photo</span>
								</div>
							</a>
					</form>
				</div>
				<div class="profile-userName">
					<h2 id="titleUserName"></h2>
				</div>
				<hr class="divider">
				<ul class="profile-menu">
					<li data-container="profile-settings-main" class="menu-item active">Profile</li>
					<li data-container="profile-contacts" class="menu-item">Contacts</li>
					<li data-container="profile-hashtags" class="menu-item">Hashtags Templates</li>
					<li data-container="profile-privacy" class="menu-item">Privacy</li>
					<li>
						<hr class="divider">
					</li>
					<li data-container="signout" class="menu-item">
						<div class="profile-signout">
							<svg width="24" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-signout"></use>
							</svg>
							Sign Out
						</div>
					</li>
				</ul>
			</div>
		</aside>
		<div class="profile-settings">
			<div class="profile-unit profile-settings-common profile-settings-main">
			</div>
			<div class="profile-unit profile-contacts d-none">
				<section class="profile-top">
					<div class="profile-top-info">
						<span style="color: #9AA0A8;">Contacts templates: <span class="profile-entities">5</span>
						</span>
						<button class="btn__form btn__add-contact btn__add-profile" data-modal="contactModalForm">Add new</button>
					</div>
				</section>
				<section class="profile-item">
					<div class="profile-item-info border-elements">
						<div class="profile-main-info">
							<div class="profile-name">John work</div>
							<div class="profile-phone">096-730-0219</div>
							<div class="profile-address">701 Art Fall</div>
						</div>
						<div class="profile-buttons">
							<a href="#">
								<svg width="24" height="24" class="icon icon__profile-open">
									<use xlink:href="assets/workber_img/icons.svg#btn-trash"></use>
								</svg>
							</a>
							<a href="#">
								<svg width="24" height="24" class="icon icon__profile-open">
									<use xlink:href="assets/workber_img/icons.svg#btn-toggleup"></use>
								</svg>
							</a>
							<a href="#">
								<svg width="24" height="24" class="icon icon__profile-close">
									<use xlink:href="assets/workber_img/icons.svg#btn-toggledown"></use>
								</svg>
							</a>
						</div>
					</div>
					<div class="profile-item-detail border-elements">
						<form action="#" class="profileDataForm" id="profileDataForm">
							<div class="nameData" style="margin-top: 0;">
								<div class="profileData__field1">
									<label for="templateName">Contacts template name</label>
									<input type="text" class="input-form" name="templateName" id="templateName"
										value="Work">
								</div>
							</div>
	
							<div class="nameData">
								<div class="profileData__field2">
									<label for="templatePhone">Phone</label>
									<input type="text" class="input-form" name="templatePhone" id="templatePhone"
										value="727-692-7836">
								</div>
								<div class="profileData__field3">
									<label for="templateEmail">Email</label>
									<input type="email" class="input-form" name="templateEmail" id="templateEmail"
										value="ethel.harvey@jalosert.com">
								</div>
							</div>
							<div class="nameData">
								<div class="profileData__field4">
									<label for="templateCity">City</label>
									<input type="text" class="input-form" name="templateCity" id="templateCity"
										value="Sacramento">
								</div>
								<div class="profileData__field5">
									<label for="templateAddress">Address</label>
									<input type="text" class="input-form" name="templateAddress" id="templateAddress"
										value="523 Glover Corner Apt. 691">
								</div>
							</div>
							<div class="form-profile-footer">
								<button type="submit" class="btn__form btn__confirmation">Save Changes</button>
							</div>
						</form>
					</div>
					<div class="profile-item-info border-elements">
						<div class="profile-main-info">
							<div class="profile-name">Home</div>
							<div class="profile-phone">842-625-3058</div>
							<div class="profile-address">26 Wintheiser Pine Apt. 802</div>
						</div>
						<div class="profile-buttons">
							<svg width="24" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-trash"></use>
							</svg>
							<svg width="24" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-toggleup"></use>
							</svg>
							<svg width="24" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-toggledown"></use>
							</svg>
						</div>
					</div>
				</section>
			</div>
			<div class="profile-unit profile-settings-common profile-hashtags d-none">
				<section class="profile-top">
					<div class="profile-top-info">
						<span style="color: #9AA0A8;">Hashtags templates: <span class="profile-entities" id="hashtagsTemplatesCount"></span>
						</span>
						<button class="btn__form btn__add-hashtag btn__add-profile" data-modal="hashtagModalForm">Add new</button>
					</div>
				</section>
				<section class="profile-item"></section>
			</div>
			<div class="profile-unit profile-settings-common profile-privacy d-none">
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
						<div class="form-profile-footer">
							<button type="submit" class="btn__form btn__confirmation">Save Changes</button>
						</div>
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
				<div class="template__header">
					<span class="text-header">
						Add new hashtags template
					</span>
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="template__body">
					<form class="modal-form" action="#" method="POST" id="formNewHashtag">
						<input type="hidden" name="hashtagTemplateList" ${dataOuterFlag}>
						<div class="nameData" style="margin-bottom: 32px;">
							<div class="nameData__field1">
								<label for="templateName">Hashtag template name</label>
								<input type="text" class="input-form" name="templateName" id="templateName">
							</div>
						</div>
						<div class="nameData-w-100">
							<div class="profileData__field2">
								<label for="hashtagTemplateList">Hashtags list</label>
								<div class="hashtags-list-full input-form" contenteditable="true" id="hashtagTemplateList">
								</div>
							</div>
						</div>
						<div class="form-profile-footer">
							<button type="submit" class="btn__form btn__confirmation">Save</button>
							<button type="reset" class="btn__form btn__confirmation">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		`;

		modal.addEventListener('click', function (e) {
			const target = e.target;
			if (!target.closest('.modalContent') || target.closest('.menu__close')) {
				this.querySelector('form').reset();
				closeSignModal(this);
			}
		});

		modal.querySelector('form').addEventListener('reset', (e) => {
			const target = e.target;
			target.querySelector('#hashtagTemplateList').textContent = '';
		});

		modal.querySelector('form').addEventListener('submit', (e) => {
			const target = e.target;
			e.preventDefault();
			submitHashtagForm(target, dataOuterFlag, document.querySelector(`.${modalOverlayClass}`));
		});

		return modal;
	};

	const submitHashtagForm = (form, dataOuterFlag, modal = null) => {
		const requestProps = {};
		const formData = new FormData(form);
		let call = 'doSetHashtagTemplates';
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
			if (key === 'id') {
				call = 'doUpdHashtagTemplates';
			}
			requestProps[key] = fieldValue;
		}
		requestProps.call = call;
		postAPIRequest(requestProps).then(() => {
			getHashtagTemplate().then((data) => {
				if (modal) {
					modal.querySelector('.menu__close').click();
				}
				localProfile.hashagsList = JSON.parse(JSON.stringify(data.hashtagsList));
				profileProps.hashtags.callback(hashtagSection, localProfile.hashagsList);
			});
		});
	};

	const submitSettingsForm = (form) => {
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
				if ((typeof fieldValue === 'object' && form.elements[key].type === 'file') 
					|| fieldValue.trim() !== '') {
					requestProps[key] = fieldValue;
				}
			} catch (e) {}
		}
		postAPIRequest(requestProps).then((data) => {
			if (data.errors) {
				console.log(data.errors);
			}
			else if (data.code && data.code === 1) {
				if ( data.message === "avatar set") {
					localProfile.personalData.user_picture = userAvatar(data.user_picture);
				} else {
					localProfile.personalData = JSON.parse(JSON.stringify({
						contact_email: data.profile.contact_email, 
						contact_phone: data.profile.contact_phone, 
						user_name: data.profile.user_name, 
						user_picture: userAvatar(data.profile.user_picture),
						user_descr: data.profile.user_descr, 
						email: data.profile.email
					}));
				}
				refreshPersonalForm();
			}
		});
	};

	const renderHashtagForm = (dataOuterFlag) => {
		const formContainer = document.createElement('div');
		formContainer.classList.add('profile-item-detail', 'border-elements');
		formContainer.insertAdjacentHTML('beforeend', `
			<form action="#" class="hashtagsDataForm" id="hashtagsDataForm">
				<input type="hidden" name="id" value="" id="id">
				<input type="hidden" name="hashtagTemplateList" ${dataOuterFlag}>
				<div class="nameData" style="margin-top: 0;">
					<div class="profileData__field1">
						<label for="templateName">Hashtag template name</label>
						<input type="text" class="input-form" name="templateName" id="templateName" value="" required>
					</div>
				</div>
				<div class="nameData">
					<div class="profileData__field2">
						<label for="hashtagTemplateList">Hashtags list <span class="editable-elem-chars color-pale">265/300</span></label>
						<div class="hashtags-list-full input-form" contenteditable="true"
							id="hashtagTemplateList">
						</div>
					</div>
				</div>
				<div class="form-profile-footer">
					<button type="submit" class="btn__form btn__confirmation">Save Changes</button>
				</div>
			</form>
		`);
		return formContainer;
	};

	const renderPersonalForm = ((dataOuterFlag) => {
		const formContainer = document.createElement('section');
		formContainer.classList.add('profile-personal');
		formContainer.insertAdjacentHTML('beforeend', `
			<h3 class="profile-h3">Personal Data</h3>
			<form action="#" class="personalDataForm" id="personalDataForm" data-batch>
			<input type="hidden" name="call" value="doUpdateProfile">
			<input type="hidden" name="user_descr" ${dataOuterFlag}>
				<div class="nameData">
					<div class="nameData__field1">
						<label for="user_name">Username (required)</label>
						<input type="text" class="input-form" name="user_name" id="user_name" value="" required>
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
					<div class="nameData-w-70 nameData__field1">
						<label for="email">Email</label>
						<input type="email" class="input-form" name="email" id="email" disabled>
					</div>
				</div>
				<div class="nameData">
					<div class="nameData__field2">
						<label for="homeLocation">Home location</label>
						<input type="text" class="input-form" name="homeLocation" id="homeLocation">
					</div>
				</div>
				<div class="nameData">
					<div class="nameData-w-70 mr-1 nameData__field1">
						<label for="contact_email">Email (public)</label>
						<input type="email" class="input-form" name="contact_email" id="contact_email" value="">
					</div>
					<div class="nameData-w-30 mr-1 nameData__field1">
						<label for="phone">Phone (public)</label>
						<input type="text" class="input-form" name="phone" id="phone" value="">
					</div>
				</div>
				<div class="nameData">
					<button type="submit" class="btn__form btn__confirmation">Save Data</button>
				</div>
			</form>
			`
		);
		return formContainer;
	});

	function renderHashtagSection(hashtagsList) {
		const section = document.createElement('div');
		hashtagsList.forEach((item) => {
			const hastagHeader = `
			<div class="profile-item-wrapper" data-id="${item.id}">
				<div class="profile-item-info border-elements">
					<div class="profile-main-info">
						<div class="profile-name">${item.templateName}</div>
						<div class="hashtags-list-cutted d-none">${item.hashtagList}</div>
					</div>
					<div class="profile-buttons">
						<a href="#" data-id="${item.id}" class="delete-hashatag profile-button d-none" data-default="none" data-showned="">
							<svg width="24" height="24" class="icon icon__profile-open">
								<use xlink:href="assets/workber_img/icons.svg#btn-trash"></use>
							</svg>
						</a>
						<a href="#" class="profile-button d-none" data-default="none" data-showned="up">
							<svg width="24" height="24" class="icon icon__profile-open">
								<use xlink:href="assets/workber_img/icons.svg#btn-toggleup"></use>
							</svg>
						</a>
						<a href="#" class="profile-button" data-showned="down">
							<svg width="24" height="24" class="icon icon__profile-close">
								<use xlink:href="assets/workber_img/icons.svg#btn-toggledown"></use>
							</svg>
						</a>
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
					if (button.classList.contains('delete-hashatag')) {
						deleteHashtagTemplate(button.dataset.id).then(() => {
							getHashtagTemplate().then((data) => {
								localProfile.hashagsList = JSON.parse(JSON.stringify(data.hashtagsList));
								profileProps.hashtags.callback(hashtagSection, localProfile.hashagsList);					
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
		personalForm = renderPersonalForm(dataOuterFlag);

	// const hashtagModalForm = renderModalHashtag(dataOuterFlag, 'modal-overlay', 'hashtagModalForm');
	const modalForms = {};
	modalForms.hashtagModalForm = renderModalHashtag(dataOuterFlag, 'modal-overlay', 'hashtagModalForm');

	const fillForm = (formContainer, formData) => {
		formContainer.querySelector('form').reset();
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

	const refreshPersonalForm = () => {
		personalForm.remove();
		profileContainer.querySelector('#imgAvatar').src = localProfile.personalData.user_picture;
		profileContainer.querySelector('#titleUserName').textContent = localProfile.personalData.user_name;
		profileContainer.querySelector('.profile-settings-main').append(fillForm(personalForm, [
			{id: '#user_name', inputType: 'value', value: localProfile.personalData.user_name},
			{id: '#user_descr', inputType: 'content', value:localProfile.personalData. user_descr},
			{id: '#email', inputType: 'value', value: localProfile.personalData.email},
			{id: '#contact_email', inputType: 'value', value: localProfile.personalData.contact_email},
			{id: '#phone', inputType: 'value', value: localProfile.personalData.contact_phone},
		]));
	};

	const hashtagSection = profileContainer.querySelector('.profile-hashtags .profile-item'),
		profileAvatar = profileContainer.querySelector('.profile-avatar-change'),
		formSetAvatar = profileContainer.querySelector('#formSetAvatar'),
		fileAvatar = formSetAvatar.querySelector('#fileAvatar'),
		hashtagsTemplatesCount = profileContainer.querySelector('#hashtagsTemplatesCount');

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

	formSetAvatar.addEventListener('submit', (e) => {
		e.preventDefault();
		// const form = e.target;
		// const formData = new FormData(form);
		// for (let [key, value] of formData.entries()) {
		// 	// console.log(key, value);
		// 	formData.append('file', target.files[0]);
		// }
		submitSettingsForm(e.target);
	});

	fileAvatar.addEventListener('change', (e) => {
		formSetAvatar.requestSubmit();
	});
	// btnAddHashtag.addEventListener('click', (e) => {
	// 	e.preventDefault();
	// 	document.body.append(hashtagModalForm);
	// });

	iconSettings.addEventListener('click', (e) => {
		e.preventDefault();
		if (!document.body.contains(profileContainer)) {
			hidePageElems('profile', showControl);
			document.body.append(profileContainer);
			URImod({
				'page': 'profile',
			});
		}
	});

	refreshPersonalForm();

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
				}
				profileContainer.querySelectorAll('.profile-unit').forEach((item) => {
					item.classList.add('d-none');
				});
				profileContainer.querySelector(`.${menuItem.dataset['container']}`).classList.remove('d-none');
				profileProps.hashtags.callback(hashtagSection, localProfile.hashagsList);
				profileContainer.querySelectorAll('.profile-menu>LI').forEach((item) => {
					item.classList.remove('active');
				});
				menuItem.classList.add('active');
			} catch (e) {}
			
		}
	});

	return profileContainer;
};

