export const showHome = e => {
	e.preventDefault();
	showControl[currentPage].scrollYPos = window.pageYOffset;
	clearSearchParam();
	currentPage = 'doStart';
	const params = selectLocation();
	URImod({
		'page': currentPage,
		'lat': params.lat,
		'lng': params.lng,
	});
	showFeedSearch(e);
};

const showFeedSearch = (e = null) => {
	if(e) {
		e.preventDefault();
	}
	showControl[currentPage].scrollYPos = window.pageYOffset;
	currentPage = 'doStart';
	if(postsStart.textContent == '') {
		const params = selectLocation();
		getDataSearch(createRequestParams(currentPage, params), postsStart, renderStartPosts);
	}
	enableElemsStart(currentPage);
	onePostShowned = 0;
};