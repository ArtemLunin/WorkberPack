export async function sendRequest(url, body) {
	const requestOptions = {
		method: 'POST',
		body: body,
	};

	const response = await fetch(url, requestOptions);
	if(response.ok) {
		const data = await response.json();
		return data;
	} else {
		throw new Error(`Error: ${response.status} ${response.statusText}`);
	}
};