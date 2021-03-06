import {sendRequest} from './network';
import {workberBackEnd} from './config';
import * as storage from './storage';

/**
* if given, priorParams overwrite originParams
* @module requests 
* @param {string} callName
* @param {object} originParams
* @param {object} priorParams
* @return {object} {call, params}
*/
export const createRequestParams = (callName, originParams, priorParams) => {
	let call = 0;
	const params = {};
	
	// originParam
	params['currentPageName'] = callName;
	if (originParams) {
		// apply priorParams first
		for(let item in priorParams) {
			if (!!priorParams[item]) {
				params[item] = priorParams[item];
			}
		}
		for(let item in originParams) {
			if (item == 'call') {
				call = originParams[item];
				continue;
			}
			if (originParams[item] !== null && !params[item]) {
				params[item] = originParams[item];
			}
		}
	}
	if (call !== 0) {
		return {'call': call, params};
	}
	return false;
};

/**
* if given, priorParams overwrite originParams
* @module requests 
* @param {string} callName
* @param {object} originParams
* @param {object} priorParams
* @return {object} {params}
*/
export const createCallRequestParams = (callName, originParams, priorParams) => {
	let call = 0;
	const params = {};

	// originParam
	params['currentPageName'] = callName;
	if (originParams) {
		// apply priorParams first
		for (let item in priorParams) {
			if (!!priorParams[item]) {
				params[item] = priorParams[item];
			}
		}
		for (let item in originParams) {
			if (item == 'call') {
				call = originParams[item];
			// 	continue;
			}
			if (originParams[item] !== null && !params[item]) {
				params[item] = originParams[item];
			}
		}
	}
	if (call !== 0) {
		return params;
	}
	return false;
};

export const sendGetRequest = async (requestProps, tokensPair = null) => {
	const formData = new FormData();
	for (const prop in requestProps) {
		formData.append(prop, requestProps[prop]);
	}
	const data = await sendRequest(workberBackEnd, formData)
		.then(async (data) => {
			if (data === 401) {
				if (tokensPair) {
					const token = tokensPair.token;
					const refreshToken = tokensPair.refreshToken;
					if (refreshToken && refreshToken != '') {
						const data = await refreshTokens(token, refreshToken)
						.then(async (objData) => {
							if (objData !== false) {
								storage.setGlobalItem({
									sid: objData.sid,
									refresh_token: objData.refresh_token,
									lifetime: objData.lifetime,
								});
								formData.set('token', objData.sid);
								const data = await sendRequest(workberBackEnd, formData);
								if (data.error) {
									// throw new Error(JSON.stringify(data.error));
									return (data.error);
								} else if (data.success) {
									return (data.success);
								}
								return false;
							} else {
								storage.removeLocalLoginInfo();
								return false;
							}
						});
						return data; 
					} else {
						return false;
					}
				}
				return 401;
			}
			if (data.error) {
				// throw new Error(JSON.stringify(data.error));
				return (data.error);
			} else if (data.success) {
				return (data.success);
			}
			return false;
		})
		.catch((error) => {
			console.error(error);
			return false;
		});
	return data;
};

export const refreshTokens = async (token, refreshToken) => {
	const data = await sendGetRequest({
		call: 'doRefreshTokens',
		token: token,
		refresh_token: refreshToken
	}, null);
	if (data.code != 1) {
		return false;
	}
	return data;
};