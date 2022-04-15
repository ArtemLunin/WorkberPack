import {sendGetRequest} from './requests';
import * as storage from './storage';
// import {sendRequest} from './network';
// import {workberBackEnd} from './config';

export const appState = {};
export const getUserProfile = async () => {
	let token = storage.getGlobalItem('sid'), 
		refreshToken = storage.getGlobalItem('refresh_token');
	if (token) {
		const profile = await sendGetRequest({
			call: 'doGetProfile',
			token: token,
		}, false);
		if (profile === 401) {
			if (refreshToken && refreshToken != '') {
				const data = await refreshTokens(token, refreshToken)
				.then(async (objData) => {
					if (objData !== false) {
						storage.setGlobalItem({
							sid: objData.sid,
							refresh_token: objData.refresh_token,
							lifetime: objData.lifetime,
						});
						const profile = await sendGetRequest({
							call: 'doGetProfile',
							token: objData.sid,
						}, false);
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
		} else {
			storeProfileInfo(profile);
		}
		return profile;		
	}
	return false;
};

export const deleteHashtagTemplate = async (id) => {
	let token = storage.getGlobalItem('sid');
	if (token) {
		const data = await sendGetRequest({
			call: 'doDelHashtagTemplates',
			token: token,
			id: id
		}, 
		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
		storage.setGlobalItem({sid: data.sid});
		return data;
	}
	return false;
};

export const getHashtagTemplate = async () => {
	let token = storage.getGlobalItem('sid');
	if (token) {
		const data = await sendGetRequest({
			call: 'doGetHashtagTemplates',
			token: token,
		}, 
		{token:token, refreshToken: storage.getGlobalItem('refresh_token')});
		storage.setGlobalItem({sid: data.sid});
		return data;
	}
	return false;
};

const refreshTokens = async (token, refreshToken) => {
	const data = await sendGetRequest({
		call: 'doRefreshTokens',
		token: token,
		refresh_token: refreshToken
	}, false);
	return data;
};

const storeProfileInfo = ({profile, sid}) => {
	if (profile) {
		storage.storeProfile(profile, {
			lat: profile.lat,
			lng: profile.lng,
			sid: sid,
		});
	}
};

export const logout = async () => {
	let token = storage.getGlobalItem('sid');
	if (token) {
		await sendGetRequest({
			call: 'logout',
			token: token,
		}, false);
	}
	storage.removeLocalLoginInfo();
	return true;
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

// const removeLocalLoginInfo = () => {
// 	storage.removeGlobalItem([
// 		'refresh_token', 'sid', 'lifetime', 'lat', 'lng'
// 	]);
// };