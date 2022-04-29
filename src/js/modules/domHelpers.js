export const getCurrentPage = (servicesSelector) => {
	const services = document.querySelectorAll(servicesSelector);
	for(let item of services) {
		if(item.matches('.service-selected')) {
			return item.dataset.service;
		}
	}
};

export const visible = elem => {
	const rect = elem.getBoundingClientRect(); 
	if (rect.top > -1000 || rect.bottom < 1000) {
		let cond = (rect.top + 400 >= 0 && rect.bottom - 400 <= (window.innerHeight || document.documentElement.clientHeight));
		return cond;
	}
	return false;
};

/**
 * 
 * @module domHelpers
 * @param {number} likes
 * @return {string} likes 100, 10K, 1M...
 */
const normalizeLikes = likes => 
	(likes < 1000) ? `${likes}` : 
		(likes < 1000000) ? `${Math.floor(likes / 1000)}K` :
		`${Math.floor(likes / 1000000)}M`;

/**
 * fill likes and favourite props for post buttons
 * @module domHelpers
 * @param {string} likes
 * @param {string} is_likes
 * @param {string} is_bookmarks
 * @return {object} likes&fav props
 */
export const getActionProps = (likes, is_likes, is_bookmarks) => {
	const likes_count = normalizeLikes(+likes);
	let like_selected = '',
		save_selected = '',
		icon_like = '',
		icon_save = '',
		text_save = true,
		like_value = 1,
		fav_value = 1;
	if (+is_likes) {
		like_selected = 'like-selected';
		icon_like = 'icon-selected';
		like_value = 0;
	}
	if (+is_bookmarks) {
		save_selected = 'save-selected';
		icon_save = 'icon-selected';
		fav_value = 0;
		text_save = false;
	}
	return {
		likes_count, like_selected, save_selected, icon_like, icon_save, text_save, like_value, fav_value
	};
};

/**
 * copy post link to clipboard
 * @module domHelpers
 * @param {event} e
 * @return {void}
 */
export const copyShareLink = (e) => {
	const target = e.target;
	try {
		navigator.clipboard.writeText(target.dataset.link);
	} catch (e) {}
	finally {
		e.stopPropagation();
	}
};