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