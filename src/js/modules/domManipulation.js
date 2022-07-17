import * as storage from './storage';
import {innerImagesPath} from './config';

/**
 * @module domManipulation
 * @param {string} servicesSelector
 * @param {DOM} targetService
 * @param {string} className
 */
export const toggleService = (servicesSelector, targetService, className) => {
	const services = document.querySelectorAll(servicesSelector);
	services.forEach(item => {
		item.classList.remove(className);
	});
	if (!!targetService) {
		targetService.classList.add(className);
	}
};

/**
 * @module domManipulation
 * @param {string} callName
 * @param {object} callName
 */
export const hidePageElems = (callName, showControl) => {
	showControl[callName].hide.forEach(item => {
		controlElems(item, 'hide');
	});
	const container = storage.getCurrentContainer();
	if (container) {
		storage.removeCurrentContainer();
		container.remove();
	}
};

export const showPageElems = (callName, showControl, container = null) => {
	showControl[callName].show.forEach(item => {
		controlElems(item, 'show');
	});
	if (container) {
		storage.setCurrentContainer(container);
		document.body.append(container);
	}
};

export const controlElems = (classElems, todo) => {
	const elems = document.querySelectorAll(`.${classElems}`);
	elems.forEach(item => {
		if (todo === 'hide') { // hide elems
			item.classList.add('d-none');
		} else { // show elems
			item.classList.remove('d-none');
		}
	});
};

/**
 * render HTML layout for buttons footer
 * @module domManipulation
 * @param {boolean} renderReset
 * @return {string} HTML layout
 */
export const renderButtonsFooter = (renderReset = false) => {
	return `
		<div class="form-profile-footer">
			<button type="submit" class="btn__form btn__confirmation">Save</button>
			${(renderReset) ? '<button type="reset" class="btn__form btn__confirmation">Cancel</button>' : ''}
		</div>
	`;
}

/**
 * render HTML layout for Fav button
 * @module domManipulation
 * @param {boolean} disabledState
 * @param {string} postid
 * @param {object} actionProps
 * @param {string} pageName
 * @return {string} HTML layout
 */
export const renderFavButton = (disabledState, postid, actionProps) => {
	return `
		<button ${disabledState} class="post-action post-save ${actionProps.save_selected}" data-call="doFav" data-param="fav" data-value="${actionProps.fav_value}" data-postid="${postid}">
			${renderIcon('btn-save', 24, actionProps.icon_save)}
			<span class="save_out" ${actionProps.text_save ? '' : `style="display:none;"`}>SAVE</span>
		</button>
	`;
};

/**
 * render HTML layout for Like button
 * @module domManipulation
 * @param {boolean} disabledState
 * @param {string} postid
 * @param {object} actionProps
 * @return {string} HTML layout
 */
export const renderLikeButton = (disabledState, postid, actionProps) => {
	return `
		<button ${disabledState} class="post-action post-like ${actionProps.like_selected}" data-call="doLike" data-param="like" data-value="${actionProps.like_value}" data-postid="${postid}">
			${renderIcon('btn-like', 24, actionProps.icon_like)}
			<span class="likes_out">${actionProps.likes_count}</span>
		</button>
	`;
};

/**
 * render HTML layout SHARE button
 * @module domManipulation
 * @param {string} shortlink
 * @param {string} newShareClass
 * @return {string} HTML layout
 */
export const renderShareButton = (shortlink, newShareClass = '') => {
	return `
		<button class="post-action post-share ${newShareClass}" data-link="${shortlink}" title="Copy link to post">
			${renderIcon('btn-share', 24)}
			SHARE
		</button>
	`;
};

/**
 * render HTML layout social button for login to app
 * @module domManipulation
 * @param {string} provider
 * @return {string} HTML layout
 */
export const renderSocialButton = (provider) => {
	return `
		<a href="#" class="btn-auth" data-auth_provider="${provider}">
			${renderIcon('btn-' + provider, 36)}
		</a>
	`;
};

/**
 * render HTML layout profile button
 * @module domManipulation
 * @param {string} btnClass
 * @param {string} attributes
 * @param {string} iconClass
 * @param {string} iconBtn
 * @return {string} HTML layout
 */
export const renderProfileButton = (btnClass, attributes, iconClass, iconBtn) => {
	return `
		<a href="#" class="${btnClass}" ${attributes}>
		${renderIcon(iconBtn, 24, iconClass)}
		</a>
	`;
}

/**
 * render HTML layout svg icon
 * @module domManipulation
 * @param {string} iconID
 * @param {number} size
 * @param {string} addedClasses
 * @return {string} HTML layout
 */
export const renderIcon = (iconID, size, addedClasses = '') => {
	return `
		<svg width="${size}" height="${size}" class="icon ${addedClasses}">
			<use xlink:href="${innerImagesPath}/icons.svg#${iconID}"></use>
		</svg>
	`;
};

/**
 * render HTML layout profile header
 * @module domManipulation
 * @param {string} title
 * @return {string} HTML layout
 */
export const renderProfileHeader = (title) => {
 return `
	<div class="template__header">
		<span class="text-header">
			${title}
		</span>
		${renderCloseMenu()}
	</div>
 `;
};

/**
 * render HTML layout
 * @module domManipulation
 * @return {string} HTML layout
 */
export const renderCloseMenu = (closeModalClass = 'menu__close') => {
	return `
		<span class="${closeModalClass}">
			${renderIcon('btn-close', 24)}
		</span>
	`;
}

/**
 * render HTML layout
 * @module domManipulation
 * @return {string} HTML layout
 */
export const renderBackMenu = () => {
	return `
		<div class="back-menu">
			<a href="#" class="navigation-link back-feed">
				${renderIcon('btn-back', 24)}
				<span class="text-back">
					BACK
				</span>
			</a>
		</div>
	`;
}

/**
 * update state for likes and favourites buttons
 * @module domManipulation
 * @param {string} postDocumentId
 * @param {object} postUpdatedObject
 * @return {void}
 */
export const updatePostActionData = (postDocumentId, postUpdatedObject) => {
	try {
		const post = document.querySelector(postDocumentId);
		for (let key in postUpdatedObject) {
			post.querySelector(key).innerText = postUpdatedObject[key];
		}
	} catch (e) {}
};