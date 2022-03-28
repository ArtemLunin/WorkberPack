export const toggleService = targetService => {
	services.forEach(item => {
		item.classList.remove('service-selected');
	});
	if(!!targetService) {
		targetService.classList.add('service-selected');
	}
};
