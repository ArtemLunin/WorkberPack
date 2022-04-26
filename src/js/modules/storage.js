import clonedeep from 'lodash.clonedeep';
import {appState} from './appState';

export const getLocation = () => {
	const lat = parseFloat(localStorage.getItem('lat'));
	const lng = parseFloat(localStorage.getItem('lng'));
	return [lat,lng];
};

export const setAppItem = (key, value) => {
	appState[key] = value;
};

export const getAppItem = (key) => appState[key];

export const setCurrentContainer = (container) => {
	appState.container = container;
};

export const getCurrentContainer = () => appState.container;

export const removeCurrentContainer = () => {
	appState.container = null;
};

export const storeProfile = (profile, localData) => {
	setGlobalItem(localData);
	appState.profile = clonedeep(profile);
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
