import { sendGetRequest, refreshTokens } from './requests';
import * as storage from './storage';

/**
 * object for store app state
 */
export const appState = {
	items: {}
};

/**
 * get user profile (async function)
 * @module appState
 * @return {object} user profile from backe-end
 */

export const getUserProfile = async () => {
	let token = storage.getGlobalItem('sid'), 
		refreshToken = storage.getGlobalItem('refresh_token');
	if (token) {
		const profile = await sendGetRequest({
			call: 'doGetProfile',
			token: token,
		}, null);
		if (profile === 401) {
			if (refreshToken && refreshToken != '') {
				const data = await refreshTokens(token, refreshToken)
				.then(async (objData) => {
					if (objData !== false 
							&& objData.message !== "There is no such refresh token") {
						storage.setGlobalItem({
							sid: objData.sid,
							refresh_token: objData.refresh_token,
							lifetime: objData.lifetime,
						});
						const profile = await sendGetRequest({
							call: 'doGetProfile',
							token: objData.sid,
						}, null);
						if (profile) {
							storeProfileInfo(profile);
							return profile;
						}
					} else {
						storage.removeLocalLoginInfo();
						return false;
					}
				});
				return data; 
			}
			return false;
		} else {
			storeProfileInfo(profile);
		}
		return profile;		
	}
	return false;
};

/**
 * send POST request (async)
 * @module ./appState
 * @param {object} requestData
 * @return {object} data from back-end
 */
export const postAPIRequest = async (requestData, reloadOnFalse = true) => {
	let token = storage.getGlobalItem('sid');
	let data = false;
	if (token) {
		requestData.token = token;
		data = await sendGetRequest(requestData, 
		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
	}
	if (data === false && reloadOnFalse) {
			location.reload();
	}
	return data;
};

export const deleteTemplate = async (typeTemplate, id) => {
	let token = storage.getGlobalItem('sid');
	let call = null;
	if (typeTemplate === 'hashtag') {
		call = 'doDelHashtagTemplates';
	} else if (typeTemplate === 'contact') {
		call = 'doDelContactsTemplates'
	}
	if (token && call) {
		const data = await sendGetRequest({
			call: call,
			token: token,
			id: id
		}, 
		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
		return data;
	}
	return false;
};

export const getTemplate = async (typeTemplate) => {
	let token = storage.getGlobalItem('sid');
	let call = null;
	if (typeTemplate === 'hashtag') {
		call = 'doGetHashtagTemplates';
	} else if (typeTemplate === 'contact') {
		call = 'doGetContactsTemplates'
	}
	if (token && call) {
		const data = await sendGetRequest({
			call: call,
			token: token,
		}, 
		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
		return data;
	}
	return false;
};

export const checkUserName = async (user_name) => {
	let token = storage.getGlobalItem('sid');
	if (token) {
		const data = await sendGetRequest({
			call: 'doCheckUserName',
			user_name: user_name,
			token: token,
		}, 
		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
		return data;
	}
	return false;
};

// const refreshTokens = async (token, refreshToken) => {
// 	const data = await sendGetRequest({
// 		call: 'doRefreshTokens',
// 		token: token,
// 		refresh_token: refreshToken
// 	}, false);
// 	return data;
// };

const storeProfileInfo = ({profile, sid}) => {
	if (profile) {
		storage.storeProfile(profile, {
			lat: profile.lat,
			lng: profile.lng,
			sid: sid,
			isLogined: 1,
		});
	}
};


export const logout = async () => {
	let token = storage.getGlobalItem('sid');
	if (token) {
		await sendGetRequest({
			call: 'logout',
			token: token,
		}, null);
	}
	storage.removeLocalLoginInfo();
	return true;
};

export const deleteAccount = async () => {
	let token = storage.getGlobalItem('sid');
	if (token) {
		await sendGetRequest({
			call: 'doDeleteAccount',
			token: token,
		},
		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
		return true;
	}
	return false;
};

export const URImod = (newURIParams) => {
	const originURI = new URL(location);
	const originPath = `${originURI.origin}${originURI.pathname}`;
	const newSearchParams = new URLSearchParams();
	
	for(let key in newURIParams) {
		if(!!newURIParams[key]) {
			newSearchParams.set(key, newURIParams[key]);
		}
	}
	history.pushState(null, null, `${originPath}?${newSearchParams.toString()}`);
};
