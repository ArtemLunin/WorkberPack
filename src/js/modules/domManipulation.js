import * as storage from './storage';

export const toggleService = (servicesSelector, targetService, className) => {
	const services = document.querySelectorAll(servicesSelector);
	services.forEach(item => {
		// item.classList.remove('service-selected');
		item.classList.remove(className);
	});
	if(!!targetService) {
		// targetService.classList.add('service-selected');
		targetService.classList.add(className);
	}
};

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

export const renderButtonsFooter = (renderReset = false) => {
	return `
		<div class="form-profile-footer">
			<button type="submit" class="btn__form btn__confirmation">Save</button>
			${(renderReset) ? '<button type="reset" class="btn__form btn__confirmation">Cancel</button>' : ''}
		</div>
	`;
}

export const renderFavButton = (disabledState, postid, actionProps) => {
	return `
		<button ${disabledState} class="post-action post-save ${actionProps.save_selected}" data-call="doFav" data-param="fav" data-value="${actionProps.fav_value}" data-postid="${postid}">
			<svg width="24" height="24" class="icon ${actionProps.icon_save}">
				<use xlink:href="assets/workber_img/icons.svg#btn-save"></use>
			</svg>
			<span class="save_out">${actionProps.text_save}</span>
		</button>
	`;
};

export const renderLikeButton = (disabledState, postid, actionProps) => {
	return `
		<button ${disabledState} class="post-action post-like ${actionProps.like_selected}" data-call="doLike" data-param="like" data-value="${actionProps.like_value}" data-postid="${postid}">
			<svg width="24" height="24" class="icon ${actionProps.icon_like}">
				<use xlink:href="assets/workber_img/icons.svg#btn-like"></use>
			</svg>
			<span class="likes_out">${actionProps.likes_count}</span>
		</button>
		`
};

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