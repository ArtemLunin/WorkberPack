import * as storage from './storage';

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
	const container = storage.getCurrentContainer();
	if (container) {
		storage.removeCurrentContainer();
		container.remove();
	}
};

export const showPageElems = (callName, showControl, container = null) => {
	showControl[callName].show.forEach(item => {
		controlElems(item, 'show');
	});
	if (container) {
		storage.setCurrentContainer(container);
		document.body.append(container);
	}
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

export const renderButtonsFooter = (renderReset = false) => {
	return `
		<div class="form-profile-footer">
			<button type="submit" class="btn__form btn__confirmation">Save</button>
			${(renderReset) ? '<button type="reset" class="btn__form btn__confirmation">Cancel</button>' : ''}
		</div>
	`;
}