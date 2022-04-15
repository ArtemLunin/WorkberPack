import {sendRequest} from './network';
import {workberBackEnd} from './config';
import * as storage from './storage';

export const createRequestParams = (callName, originParams, priorParams) => {
	let call = 0;
	const params = {};
	
	// originParam
	params['currentPageName'] = callName;
	if(originParams) {
		// apply priorParams first
		for(let item in priorParams) {
			if(!!priorParams[item]) {
				params[item] = priorParams[item];
			}
		}
		for(let item in originParams) {
			if(item == 'call') {
				call = originParams[item];
				continue;
			}
			if(originParams[item] !== null && !params[item]) {
				params[item] = originParams[item];
			}
		}
	}
	if (call !== 0) {
		return {'call': call, params};
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
									throw new Error(JSON.stringify(data.error));
								} else if (data.success) {
									return (data.success);
								}
								return false;
							} 
							return false;
						});
						return data; 
					}
				}
				// storage.removeLocalLoginInfo();
				return 401;
			}
			if (data.error) {
				throw new Error(JSON.stringify(data.error));
			} else if (data.success) {
				return (data.success);
			}
			return false;
		})
		.catch((error) => {
			return false;
		});
	return data;
};

const refreshTokens = async (token, refreshToken) => {
	const data = await sendGetRequest({
		call: 'doRefreshTokens',
		token: token,
		refresh_token: refreshToken
	}, false);
	return data;
};