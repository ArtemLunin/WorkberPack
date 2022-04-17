import * as storage from './storage';
export async function sendRequest(url, body) {
	const requestOptions = {
		method: 'POST',
		body: body,
	};

	const response = await fetch(url, requestOptions);
	if(response.ok) {
		const data = await response.json();
		if (data.success && data.success.sid) {
			storage.setGlobalItem({'sid':data.success.sid});
		}
		else if (data.error && data.error.sid) {
			storage.setGlobalItem({'sid':data.error.sid});
		}
		return data;
	} else if (response.status === 401) {
		return 401;
	} else {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	}
};