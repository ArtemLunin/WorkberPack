import clonedeep from 'lodash.clonedeep';
import {appState} from './appState';

export const getLocation = () => {
	const lat = parseFloat(localStorage.getItem('lat'));
	const lng = parseFloat(localStorage.getItem('lng'));
	return [lat,lng];
};

/**
 * set variable to memory
 * @module storage
 * @param {string} key
 * @param {any} value
 *
 */
export const setAppItem = (key, value) => {
	appState.items = {};
	appState.items[key] = value;
};

/**
 * get variable from memory
 * @module storage
 * @param {string} key
 * @return {string} value of key.
 */
export const getAppItem = (key) => appState.items[key];

export const setCurrentContainer = (container) => {
	appState.container = container;
};

export const getCurrentContainer = () => appState.container;

export const removeCurrentContainer = () => {
	appState.container = null;
};

/**
 * store user profile, also set up localStorage
 * @module storage
 * @param {object} profile to store in appState
 * @param {object} localData to store in localStorage
 */
export const storeProfile = (profile, localData) => {
	setGlobalItem(localData);
	appState.profile = clonedeep(profile);
	if (localData.isLogined) {
		setAppItem('isLogined', localData.isLogined);
	}
};

export const setGlobalItem = (item, packJSON = null) => {
	if (packJSON) {
		localStorage.setItem(packJSON, JSON.stringify(item));
	} else {
		for (const key in item) {
			localStorage.setItem(key, item[key]);
		}
	}
};

export const getGlobalItem = (itemKey) => localStorage.getItem(itemKey);

export const removeGlobalItem = (itemsArr) => {
	itemsArr.forEach(item => {
		localStorage.removeItem(item);
	});
};

export const removeLocalLoginInfo = () => {
	removeGlobalItem([
		'refresh_token', 'sid', 'lifetime', 'lat', 'lng'
	]);
};

export const getLocalityStatus = () => {
	const localityStatus = localStorage.getItem('localityStatus');
	if(!!localityStatus && localityStatus === 'locality-home') {
		return 'locality-home';
	} else {
		return 'locality-local';
	}
};

export const iniBrowserLocation = () => {
	if (navigator.geolocation && !(getGlobalItem('lat') && getGlobalItem('lng'))) {
		navigator.geolocation.getCurrentPosition(success);
	}

	function success(position) {
		setGlobalItem({
			lat: position.coords.latitude,
			lng: position.coords.longitude
		});
	}
};
