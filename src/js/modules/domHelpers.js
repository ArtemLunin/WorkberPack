export const getCurrentPage = (servicesSelector) => {
	const services = document.querySelectorAll(servicesSelector);
	for(let item of services) {
		if(item.matches('.service-selected')) {
			return item.dataset.service;
		}
	}
};

export const cropDescription = (descriptionEl, descriptionCounterEl, maxDescriptionLength) => {
	// descriptionEl.innerText = descriptionEl.innerText.trim().substring(0, maxDescriptionLength);
	descriptionCounterEl.innerText = `${descriptionEl.innerText.length}/${maxDescriptionLength}`;
};

export const visible = elem => {
	const rect = elem.getBoundingClientRect(); 
	if (rect.top > -1000 || rect.bottom < 1000) {
		let cond = (rect.top + 400 >= 0 && rect.bottom - 400 <= (window.innerHeight || document.documentElement.clientHeight));
		return cond;
	}
	return false;
};