import {hidePageElems} from './domManipulation';
import {renderModalHashtag} from './modal';
import {URImod, deleteHashtagTemplate, getHashtagTemplate, logout} from './appState';

export const renderProfile = ({contact_email, contact_phone, user_name, user_picture, user_descr, email, hashtagsList}, settingsSelector, showControl) => {

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
	const userAvatar = user_picture ? user_picture : 'assets/workber_img/big_avatar.jpeg';

	// const hashtagsTemplatesCount = hashtagsList.length;

	profileContainer.classList.add('posts-block', 'profile-container');
	profileContainer.innerHTML = `
		<aside class="profile-sidebar">
			<div class="profile-user">
				<div class="profile-avatar">
					<img class="img-avatar" src="${userAvatar}" alt="uset avatar">
				</div>
				<div class="profile-userName">
					<h2>${user_name}</h2>
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
				<section class="profile-personal">
					<h3 class="profile-h3">Personal Data</h3>
					<form action="#" class="personalDataForm" id="personalDataForm">
						<div class="nameData">
							<div class="nameData__field1">
								<label for="userName">Username (required)</label>
								<input type="text" class="input-form" name="userName" id="userName" value="${user_name}" required>
							</div>
						</div>
						<div class="nameData">
							<div class="nameData-w-100 nameData__field3">
								<label for="profileDescription">Description <span
										class="editable-elem-chars color-pale" id="descriptionCounter"></span></label>
								<div class="profile-description input-form" contenteditable="true" id="profileDescription">${user_descr}</div>
							</div>
						</div>
						<div class="nameData">
							<div class="nameData-w-70 nameData__field1">
								<label for="email">Email</label>
								<input type="email" class="input-form" name="email" id="email" value=${email} disabled>
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
								<input type="email" class="input-form" name="contact_email" id="contact_email" value="${contact_email}">
							</div>
							<div class="nameData-w-30 mr-1 nameData__field1">
								<label for="contact_phone">Phone (public)</label>
								<input type="text" class="input-form" name="contact_phone" id="contact_phone" value="${contact_phone}">
							</div>
						</div>
						<div class="nameData">
							<button type="submit" class="btn__form btn__confirmation">Save Data</button>
						</div>
					</form>
				</section>
			</div>
			<div class="profile-unit profile-contacts d-none">
				<section class="profile-top">
					<div class="profile-top-info">
						<span style="color: #9AA0A8;">Contacts templates: <span class="profile-entities">5</span>
						</span>
						<button class="btn__form btn__add-profile">Add new</button>
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
						<button class="btn__form btn__add-hashtag">Add new</button>
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

	const renderHashtagForm = () => {
		// ({id, templateName, hashtagList}
		const formContainer = document.createElement('div');
		formContainer.classList.add('profile-item-detail', 'border-elements');
		// const hashtagForm = document.createElement('form');
		formContainer.insertAdjacentHTML('beforeend', `
			<form action="#" class="hashtagsDataForm" id="hashtagsDataForm">
				<input type="hidden" name="id" value="" id="id">
				<div class="nameData" style="margin-top: 0;">
					<div class="profileData__field1">
						<label for="hashtagTemplateName">Hashtag template name</label>
						<input type="text" class="input-form" name="hashtagTemplateName" id="hashtagTemplateName" value="" required>
					</div>
				</div>
				<div class="nameData">
					<div class="profileData__field2">
						<label for="hashtagTemplateList">Hashtags list <span
								class="editable-elem-chars color-pale">265/300</span></label>
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
							// if (data) {
								getHashtagTemplate().then((data) => {
									profileProps.hashtags.callback(hashtagSection, data.hashtagsList);						
								});
								// console.log(data);

							// }
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
							{id: '#hashtagTemplateName', inputType: 'value', value: parent.querySelector('.profile-name').textContent},
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

	const hashtagForm = renderHashtagForm();
	const hashtagModalForm = renderModalHashtag('modal-overlay');

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

	const hashtagSection = profileContainer.querySelector('.profile-hashtags .profile-item'),
		btnAddHashtag = profileContainer.querySelector('.btn__add-hashtag'),
		hashtagsTemplatesCount = profileContainer.querySelector('#hashtagsTemplatesCount');
	
	btnAddHashtag.addEventListener('click', (e) => {
		e.preventDefault();
		document.body.append(hashtagModalForm);
	});

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
				profileProps.hashtags.callback(hashtagSection, hashtagsList);
				profileContainer.querySelectorAll('.profile-menu>LI').forEach((item) => {
					item.classList.remove('active');
				});
				menuItem.classList.add('active');
			} catch (e) {}
			
		}
	});
	return profileContainer;
}