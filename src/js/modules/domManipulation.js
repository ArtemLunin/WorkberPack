export const toggleService = (servicesSelector, targetService, className) => {
	const services = document.querySelectorAll(servicesSelector);
	services.forEach(item => {
		// item.classList.remove('service-selected');
		item.classList.remove(className);
	});
	if(!!targetService) {
		// targetService.classList.add('service-selected');
		targetService.classList.add(className);
	}
};

export const hidePageElems = (callName, showControl) => {
	showControl[callName].hide.forEach(item => {
		controlElems(item, 'hide');
	});
};

export const showPageElems = (callName, showControl) => {
	showControl[callName].show.forEach(item => {
		controlElems(item, 'show');
	});
};

export const controlElems = (classElems, todo) => {
	const elems = document.querySelectorAll(`.${classElems}`);
	elems.forEach(item => {
		if (todo === 'hide') { // hide elems
			item.classList.add('d-none');
		} else { // show elems
			item.classList.remove('d-none');
		}
	});
};