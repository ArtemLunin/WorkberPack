import {getActionProps} from './domHelpers';
import {renderFavButton, renderLikeButton, renderShareButton, renderIcon} from './domManipulation';
import { innerImagesPath } from './config';

const getDefaultContactsData = contactsList => {
	const contactsData = {
		contact_phone: '', 
		contact_email: '',
		contact_address: '',
	};
	if(contactsList && typeof contactsList !== 'undefined')
	{
		let tempContact = contactsList[0];
		if(typeof tempContact === 'undefined') {
			tempContact = contactsList;
		}
		contactsData.contact_phone = tempContact.phone || '';
		contactsData.contact_email = tempContact.contact_email || '';
		contactsData.contact_address = tempContact.address || '';
	}
	return contactsData;
};
const getUserAvatar = (userPicture, userName) => {
	let user_img = null;
	if(userPicture && userPicture != 'null') {
		user_img = `<img src="${userPicture}" alt="Post avatar" class="post-avatar"></img>`;
	} else {
		user_img = `<span class="post-noavatar">${userName.substring(0,1).toUpperCase()}</span>`;
	}
	return user_img;
};

export const createPost = ({postid, user_picture, user_name, collage, images = '', post_name, text_adv, likes, hashtags, shortlink, city, role_ad, contactsList, is_likes, is_bookmarks}, isLogined = false) => {

	let hide_post_img = 'd-none',
		hide_more = 'd-none';
	let hashtags_str = '',
		images_href = '',
		post_img = '';
	const user_img = getUserAvatar(user_picture, user_name);
	const disabledState = (isLogined) ? '' : 'disabled';
	const actionProps = getActionProps(likes, is_likes, is_bookmarks);
	
	if (collage && collage.name != '') {
		post_img = collage.name;
		hide_post_img = '';
	}
	if (hashtags && hashtags.length > 0) {
		hashtags_str = hashtags.map(hashtag => `<a class="a-hashtag" data-page="${role_ad}" data-hashtag="${hashtag.substring(1)}" href="#" title="Search by hashtag">${hashtag}</a>`).join(' ');
	}
	try {
		JSON.parse(window.atob(images)).forEach(img_item => {
			images_href += `<div><img src="${img_item.name}" alt="Post image"></img></div>`;
		});
	} catch (e) {}

	const {contact_phone, contact_email, contact_address} = getDefaultContactsData(contactsList);
	const div = document.createElement('div');
	div.classList.add('post');
	div.innerHTML = `
			<div class="post-body-view">
				<div class="slider-buttons ${images_href === '' ? 'd-none' : ''}">
					<button type="button" class="slider-prev"><img src="${innerImagesPath}/left.svg"></button>
					<button type="button" class="slider-next"><img src="${innerImagesPath}/right.svg"></button>
				</div>
				<div class="post-image-slider ${hide_post_img}">
					<div><img src="${post_img}" alt="Post image"></div>
					${images_href}
				</div>
				<div style="display:none;" class="post-image post-image__href">${post_img}</div>
				<div class="post-content">
					<div class="post-activities">
						<div class="post-action-group">
							${renderLikeButton(disabledState, postid, actionProps)}
							${renderFavButton(disabledState, postid, actionProps)}
							${renderShareButton(shortlink)}
						</div>
						<div class="post-more">
							<span class="post-view ${hide_more}">
								<a href="#" class="icon-more">
									${renderIcon("btn-more", 24)}
								</a>
							</span>
						</div>
					</div>
					<div class="post-title">
						${post_name}
					</div>
					<div class="post-text">
						${text_adv}
					</div>
					<div class="post-text post-hashtags hashtags-links">
						${hashtags_str}
					</div>
				</div>
				
			</div>
			<div class="post-view-footer">
				<div class="user-data">
					${user_img}
					<div>
						<p class="post-username">${user_name}</p>
						<p class="location-city">${city}</p>
					</div>
				</div>
				<!--<a href="#" class="post-contacts">Show Sontacts</a>-->
				<div class="post-contact-info">
					<p class="post-contact-phone"><a href="tel:${contact_phone.replace(/\+|-|\s|\(|\)/g,'')}">${contact_phone}</a></p>
					<p class="post-contact-email"><a href="mailto:${contact_email}">${contact_email}</a></p>
					<p class="post-contact-address">${contact_address}</p>
				</div>
			</div>
			<div class="post-map-show location" id="post-map-show" >
			</div>
			`;
	return div;
};

export const createStartPostFeed = ({id, user_picture, user_name, collage, images, post_name, text_adv, likes, role_ad, hashtags, shortlink, dist, lat, lng, is_likes, is_bookmarks, city, contactsList}, currentPageName = '') => {
	if(!id) {
		return false;
	}
	let post_img = '';
	let hide_post_img = 'd-none';
	let hide_post_text = 'd-none';
	let serviceClass = 'service-offer';
	let serviceInfo = 'I OFFER';
	const user_img = getUserAvatar(user_picture, user_name);
	if (collage && collage != 'null') {
		post_img = collage.name;
		hide_post_img = '';
	} else { // если картинки к посту нет, покажем заголовок и текст
		hide_post_text = '';
		return false;
	}
	if (role_ad === 'project') {
		serviceClass = 'service-need';
		serviceInfo = 'I NEED';
	}
	const {contact_phone, contact_email, contact_address} = getDefaultContactsData(contactsList);
	const div = document.createElement('div');
	div.classList.add('post-col', 'new-post');
	div.setAttribute('id', `${currentPageName}_postid_${id}`); 
	div.dataset.showPageName = 'showOnePost';
	div.dataset.postid = id;
	hide_post_img = 'd-none';
	// hide_post_text = '';
	if (post_img !== '') {
		div.style.background = `no-repeat center/cover url("${post_img}")`;
	}
	div.innerHTML = `
		<div class="user-data d-none" data-avatar="${user_picture}">
			${user_img}
			<span class="post-username">${user_name}</span>
			<p class="location-city">${city}</p>
		</div>
		<div style="display:none;" class="post-like">${likes}</div>
		<div style="display:none;" class="post-is_likes">${is_likes}</div>
		<div style="display:none;" class="post-is_bookmarks">${is_bookmarks}</div>
		<div style="display:none;" class="post-role_ad">${role_ad}</div>
		<div style="display:none;" class="post-hashtags">${JSON.stringify(hashtags)}</div>
		<div style="display:none;" class="post-link">${shortlink}</div>
		<div style="display:none;" class="post-image post-image__href">${post_img}</div>
		<div style="display:none;" class="post-images" data-images="${window.btoa(JSON.stringify(images))}"></div>
		<!--<div class="post-hashtags d-none" data-hashtags=${JSON.stringify(hashtags)} data-role_ad="${role_ad}">
		</div>-->
		<!--<div class="${hide_post_img}">
			<a class="post-link " href="${shortlink}" data-postid="${id}">
				<img src="${post_img}" alt="Post image">
			</a>
		</div>-->
		<div class="post-content" data-dist="${dist}" data-lat="${lat}" data-lng="${lng}">
			<div class="start-post-text ${hide_post_text}">
				<div class="post-title">
					${post_name}
				</div>
				<div class="post-text post-text-preview preview-start">
					${text_adv}
				</div>
			</div>
		</div>
		<div class="post-contact-info d-none">
			<p class="post-contact-phone">${contact_phone}</p>
			<p class="post-contact-email">${contact_email}</p>
			<p class="post-contact-address">${contact_address}</p>
		</div>
		<span class="service-info ${serviceClass}">${serviceInfo}</span>
	`;
	return div;
};

/**
 * render HTML post
 * @module handlerPostData
 * @param {object} {}
 * @param {boolean} isLogined
 * @param {string} currentPageName
 * @return {DOM} div
 */
export const createPostFeed = ({id, user_picture, user_name, collage, post_name, text_adv, likes, hashtags, images = null, shortlink, lat, lng, is_likes, is_bookmarks, city, role_ad, dist, contactsList, zonesName}, isLogined = false, currentPageName = '') => {
	if(!id) {
		return false;
	}
	let post_img = '';
	let hide_post_img = 'd-none';
	let hashtags_str = '';

	const user_img = getUserAvatar(user_picture, user_name);
	const disabledState = (isLogined) ? '' : 'disabled';
	const actionProps = getActionProps(likes, is_likes, is_bookmarks);

	if (collage && collage != 'null') {
		post_img = collage.name;
		hide_post_img = '';
	}
	if (hashtags && hashtags.length > 0)
	{
		hashtags_str = hashtags.join(' ');
	}
	const {contact_phone, contact_email, contact_address} = getDefaultContactsData(contactsList);
	const div = document.createElement('div');
	div.classList.add('post', 'post-feed', 'new-post', currentPageName);
	div.dataset.postid = id;
	div.setAttribute('id', `${currentPageName}_postid_${id}`); 
	div.dataset.showPageName = 'showOnePost';
	div.innerHTML = `
			<div class="post-header">
				<div class="user-data" data-avatar="${user_picture}">
					${user_img}
					<div>
						<p class="post-username">${user_name}</p>
						<p class="location-city">${city}</p>
					</div>
				</div>
				<!--<a href="#" class="post-contacts">Show Sontacts</a>-->
				<div class="post-contact-info">
					<p class="post-contact-phone">${contact_phone}</p>
					<p class="post-contact-email">${contact_email}</p>
					<p class="post-contact-address">${contact_address}</p>
				</div>
			</div>
			<div class="post-body">
				<div class="d-none post-is_likes">${is_likes}</div>
				<div class="d-none post-is_bookmarks">${is_bookmarks}</div>
				<div class="d-none post-role_ad">${role_ad}</div>
				<div class="post-image ${hide_post_img}">
					<a class="post-link" href="${shortlink}" data-postid="${id}">
						<img src="${post_img}" alt="Post image">
					</a>
				</div>
				<div style="display:none;" class="post-image__href">${post_img}</div>
				<div style="display:none;" class="post-images" data-images="${window.btoa(JSON.stringify(images))}"></div>
				<div class="post-content" data-dist="${dist}" data-lat="${lat}" data-lng="${lng}" data-zones="${zonesName}">
					<div class="post-activities">
						<div class="post-action-group">
							${renderLikeButton(disabledState, id, actionProps)}
							${renderFavButton(disabledState, id, actionProps)}
							${renderShareButton(shortlink, "new-post-share")}
						</div>
						<!--<div class="post-more">
							<span class="post-view">
								<a href="${shortlink}" class="icon-more" data-postid="${id}">
									<svg width="24" height="24" class="icon">
										<use xlink:href="${innerImagesPath}/icons.svg#btn-more"></use>
									</svg>
								</a>
							</span>
						</div>-->
					</div>
					<div class="post-title">
						${post_name}
					</div>
					<div class="post-text post-text-preview">
						${text_adv}
						<span class="post-text-more d-none">… more</span>
					</div>
					<div class="post-text post-hashtags d-none" data-hashtags=${JSON.stringify(hashtags)} data-role_ad="${role_ad}">
						${JSON.stringify(hashtags)}
					</div>
				</div>
			</div>`;
	return div;
};