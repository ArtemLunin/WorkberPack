export const getLocation = () => {
	const lat = parseFloat(localStorage.getItem('lat'));
	const lng = parseFloat(localStorage.getItem('lng'));
	return [lat,lng];
};

export const setLocalityStatus = localityStatus => {
	localStorage.setItem('localityStatus', localityStatus);
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
	if (navigator.geolocation && !(localStorage.getItem('lat') && localStorage.getItem('lng'))) {
		navigator.geolocation.getCurrentPosition(function (position) {
			localStorage.setItem('lat', position.coords.latitude);
			localStorage.setItem('lng', position.coords.longitude);
		});
	}
};