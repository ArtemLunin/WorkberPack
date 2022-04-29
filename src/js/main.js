import {mapLoader, setPostCoordsMap} from './modules/map';
import {workberBackEnd, workberImages, endSearchCode} from './modules/config';
import * as storage from './modules/storage';
import {renderModalSign, commonModalOpenClass} from './modules/modal';
import {createPost, createStartPostFeed, createPostFeed} from './modules/handlerPostData';
import {createRequestParams} from './modules/requests';
import {sendRequest} from './modules/network';
import {getUserProfile, URImod} from './modules/appState';
import {toggleService, hidePageElems, showPageElems} from './modules/domManipulation';
import {getCurrentPage, visible, copyShareLink} from './modules/domHelpers'
import {renderProfile, handlePostBtn} from './modules/domElements';


window.addEventListener('DOMContentLoaded', () => {

	/*jshint camelcase: false */

let postid = 0;
let search = location.search;
const paramsURI = new URLSearchParams(location.search.substring(1));
postid = paramsURI.get('postid');

let pathname = location.pathname;
let path = pathname.match(/post-view\.html/);
if (path && postid != 0) {
	let redirect = pathname.replace(/post-view\.html/, `index.html?page=post&postid=${postid}`);
	location.href = redirect;
} else {

let isLogined = 0;
let waitForLoad = 0;


const mainPage = document.querySelector('.main-page');
const postsOffer = document.querySelector('.posts-offer');
const postsStart = document.querySelector('.posts-start');
const postsNeed = document.querySelector('.posts-need');
const postsAll = document.querySelector('.posts-all');
const postsOne = document.querySelector('.post-one');

// const serviceOffer = document.querySelector('.offer');
// const serviceNeed = document.querySelector('.need');

// const startPostText = document.querySelector('.start-post-text');

const workberHome = document.querySelector('.workber-logo');
const workberLogo = document.querySelector('.workber-logo img');
const distanceInfo = document.querySelector('.distance-info');
const distances = document.querySelector('.distances');
const distText = document.querySelector('.dist-text');
const distTextHeader = document.querySelector('.dist-text-header');
const postMenu = document.querySelector('.post-menu');
const userMenu = document.querySelector('.user-menu'),
	iconsPanel = document.querySelector('.icons-panel');
const backMenu = document.querySelector('.back-menu');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const tabsServices = document.querySelector('.tabs-service');
const searchService = document.querySelector('.search-service');
const searchProject = document.querySelector('.search-project');
const searchAll = document.querySelector('.service-search-all');
const iconSearchPage = document.querySelector('.icon-search-page');
const smallAvatar = document.querySelector('#small_avatar'),
	btnloginAccount = document.querySelector('#login_acc');

const notFound = document.querySelector('.not-found');
const noMorePosts = document.querySelector('.no-more-posts');
const searchSpinner = document.querySelector('.search-spinner');

const searchBlock = document.querySelector('.search-block');
const tabsLocality = document.querySelector('.tabs-locality');
const localityHome = document.querySelector('.locality-home');
const localityLocal = document.querySelector('.locality-local');

const showControl = {
	'service': {
		'hide': ['posts-need', 'start-page', 'posts-all', 'post-one', 'back-menu'],
		'show': ['posts-offer', 'search-block', 'post-menu', 'icon-settings', 'dist-text-header', 'distances', 'tabs-service'],
		'callParams': {
			call: 'doSearch',
			role_ad: 'service',
		},
		'scrollYPos': 0,
		'container': postsOffer,
		'zoneName': '',
	},
	'project': {
		'hide': ['posts-offer', 'posts-all', 'start-page', 'post-one', 'back-menu'],
		'show': ['posts-need', 'search-block', 'post-menu', 'icon-settings', 'dist-text-header', 'distances', 'tabs-service'],
		'callParams': {
			call: 'doSearch',
			role_ad: 'project',
		},
		'scrollYPos': 0,
		'container': postsNeed,
		'zoneName': '',
	},
	'all': {
		'hide': ['posts-offer', 'posts-need', 'start-page', 'post-one', 'back-menu'],
		'show': ['posts-all', 'search-block', 'post-menu', 'icon-settings'],
		'callParams': {
			call: 'doSearchAll',
		},
		'scrollYPos': 0,
		'container': postsAll,
		'zoneName': '',
	},
	'doStart': {
		'hide': ['posts-offer', 'posts-need', 'posts-all', 'home-page', 'post-one', 'back-menu', 'distance-info', 'dist-text-header', 'distances'],
		'show': ['start-page', 'post-menu', 'icon-settings', 'tabs-service'],
		'callParams': {
			call: 'doStart',
			postid: null,
			dist: null,
		},
		'scrollYPos': 0,
		'container': postsStart,
	},
	'showOnePost': {
		'hide': ['posts-offer', 'posts-need', 'posts-all', 'home-page', 'start-page', 'distance-info', 'dist-text-header', 'distances', 'icon-settings', 'tabs-service'],
		'show': ['post-one', 'back-menu'],
		'callParams': {
			call: 'getPostByID',
			postid: null,
		},
		'container': postsOne,
	},
	'profile': {
		'hide': ['posts-offer', 'posts-need', 'posts-all', 'home-page', 'start-page', 'post-one', 'distance-info', 'dist-text-header', 'distances', 'tabs-service'],
		'show': ['back-menu'],
	}
};

const callParams = {
	doStart: {
		call: 'doStart',
		postid: null,
		dist: null,
	},
};

let currentPage = 'doStart';
workberHome.dataset['currentPage'] = 'doStart';
const pages = ['service', 'project', 'all', 'post', 'profile'];
const eventClick = new Event("click");
const eventScroll = new Event("scroll");

let currentlyLoad = 0; // в данный момент загружено 0 элементов
let postsOfferShowned = 1; // сейчас показывается offer
let scrollSearchActivated = 0;
let scrollFeed = 0;
// let scrollDisabled = 0;
let onePostShowned = 0;
let localityStatus = '';

// let globalPostID = null;


postsOffer.textContent = '';
postsNeed.textContent = '';
postsStart.textContent = '';

const renderOnePost = (postData, postsContainer) => {
	postsContainer.textContent = '';
	if (postData && postData.post) {
		const post = createPost(postData.post, storage.getAppItem('isLogined'));
		postsContainer.append(post);
		const lat = parseFloat(postData.post.lat);
		const lng = parseFloat(postData.post.lng);
		const city = parseFloat(postData.post.city);
		setPostCoordsMap(lat, lng, city);
	}
	currentlyLoad++;
	window.scroll(0, 0);
};

const renderStartPosts = ({posts, last_postid, last_dist, code}, postsContainer,  currentPageName = '') => 
{
	const div = document.createElement('div');
	div.classList.add('posts-row');
	posts.forEach(postData => {
		const postFeed = createStartPostFeed(postData, currentPageName);
		if (!!postFeed) {
			postsContainer.dataset.last_postid = last_postid;
			postsContainer.dataset.last_dist = last_dist;
			postsContainer.dataset.code = code;
			div.append(postFeed);
		}
	});
	postsContainer.append(div);
	currentlyLoad++;
	scrollSearchActivated = 0;
};

const renderSearchPosts = ({zones, last_postid, last_dist, code}, postsContainer, currentPageName = '') => {
	postsContainer.dataset.last_postid = last_postid;
	postsContainer.dataset.last_dist = last_dist;
	postsContainer.dataset.code = code;
	if (zones.length == 0 && postsContainer.textContent === '') {
		postsContainer.append(notFoundPosts());
	} else {
		distances.classList.remove('d-none');
		zones.forEach(item => {
			const zonesName = item.name;
			item.posts.forEach(postData => {
				postData.zonesName = zonesName;
				if (showControl[currentPageName].zoneName === '') {
					showControl[currentPageName].zoneName = zonesName;
				}
				const postFeed = createPostFeed(postData, storage.getAppItem('isLogined'), currentPageName);
				if (!!postFeed) {
					postsContainer.append(postFeed);
				}
			});
		});
	}
	currentlyLoad++;
	scrollSearchActivated = 0;
};

const renderSearchAll = (data) => {
	console.log(data);
};

const getPostByID = async (postid, postsContainer, callback) => {
	currentPage = 'showOnePost';
	const params = {
		postid: postid,
	};
	getDataSearch(createRequestParams(currentPage, showControl[currentPage].callParams, params), postsContainer, callback);
	enableElemsStart(currentPage);
};

const changeSearch = (e) => 
{
	e.preventDefault();
	const target = e.target;
	if (target.matches('.service')) {
		if (!target.matches('.service-selected') || currentPage == 'doStart') {
			// toggleService(target);
			toggleService('.service', target, 'service-selected');
			showControl[currentPage].scrollYPos = window.pageYOffset;
			showControl[currentPage].container.classList.add('d-none');
			const searchPage = target.dataset.service;
			currentPage = searchPage;
			clickSearchButton();
		}
	}
};

const searchPosts = (e) => {
	const params = selectLocation();
	showControl[currentPage].scrollYPos = window.pageYOffset;
	currentPage = getCurrentPage('.service');
	if(searchInput.value === showControl[currentPage].callParams.keywords) {
		enableElemsStart(currentPage);
		// if (searchInput.value === '' || searchInput.value.trim().length < 3) {
		// 	return false;
		// }
	} else {
		distances.classList.add('d-none');
		distText.textContent = distTextHeader.textContent = '';
		showControl[currentPage].callParams.keywords = searchInput.value;
		showControl[currentPage].scrollYPos = 0;
		if (currentPage === 'all') {
			const hashTag = searchInput.value;
			showControl[currentPage].callParams.keywords = hashTag;
			goSearch(currentPage, hashTag, renderSearchAll);
		} else {
			goSearch(currentPage, searchInput.value, renderSearchPosts);
		}
	}
	URImod({
		'page': currentPage,
		'hashtag': searchInput.value,
		'lat': params.lat,
		'lng': params.lng,
	});
};

const goSearch = (searchPage, keywords, renderPosts) => {
	currentPage = searchPage;
	const params = selectLocation();
	const originURI = new URL(location);
	let newURI = new URL(`${originURI.origin}${originURI.pathname}`);
	newURI.searchParams.delete('hashtag');
	showControl[searchPage].container.textContent = '';
	if(!!keywords && keywords.trim().length > 2) {
		params.keywords = keywords;
	}
	getDataSearch(createRequestParams(currentPage, showControl[currentPage].callParams, params), postsOffer, renderPosts);
	enableElemsStart(searchPage);
};

const showFeedSearch = (e = null) => {
	if (e) {
		e.preventDefault();
	}
	showControl[currentPage].scrollYPos = window.pageYOffset;
	currentPage = 'doStart';
	if (postsStart.textContent == '') {
		const params = selectLocation();
		getDataSearch(createRequestParams(currentPage, showControl[currentPage].callParams, params), postsStart, renderStartPosts);
	}
	enableElemsStart(currentPage);
	onePostShowned = 0;
};

const getDataSearch = async (searchQuery, postsContainer, callback) => {
	if(!searchQuery) {
		return false;
	}
	searchSpinner.classList.remove('d-none');
	noMorePosts.classList.add('d-none');
	const currentPageName = searchQuery.params.currentPageName;
	delete searchQuery.params.currentPageName;
	waitForLoad++;
	const formdata = new FormData();
	formdata.append("call", searchQuery.call);
	for(const callParam in searchQuery.params) {
		formdata.append(callParam, searchQuery.params[callParam]);
	}
	if (storage.getGlobalItem('sid')) {
		formdata.append('token', storage.getGlobalItem('sid'));
	}

	sendRequest(workberBackEnd, formdata).then((data) => {
		callback(data.success, showControl[currentPageName].container, currentPageName);
	});
};

const addEvents = () => {
	const postShare = document.querySelectorAll('.new-post-share');
	postShare.forEach(item => {
		item.classList.remove('new-post-share');
		item.addEventListener('click', copyShareLink);
	});
	const newPost = document.querySelectorAll('.new-post');
	newPost.forEach(item => {
		item.classList.remove('new-post');
		const postMoreInfo = item.querySelector('.post-text-more');
		if (postMoreInfo) {
			const postText = item.querySelector('.post-text');
			if (postText.clientHeight < postText.scrollHeight) {
				postMoreInfo.classList.remove('d-none');
				postMoreInfo.addEventListener('click', showMoreInfo);
			}
		}
		try {
			item.querySelector('.post-action-group').addEventListener('click', (e) => {
				e.stopPropagation();
				e.preventDefault();
				handlePostBtn(e.target);
			});
		}
		catch (e) {}
		item.addEventListener('click', (e) => {
			e.preventDefault();
			showOnePost(item.dataset.postid);
		});
	});
};

// const toggleService = targetService => {
// 	services.forEach(item => {
// 		item.classList.remove('service-selected');
// 	});
// 	if(!!targetService) {
// 		targetService.classList.add('service-selected');
// 	}
// };

const enableElemsStart = callName => {
	if (currentlyLoad >= waitForLoad) {
		searchSpinner.classList.add('d-none');
		hidePageElems(callName, showControl);
		showPageElems(callName, showControl);
		if (showControl[currentPage].container.dataset.code === endSearchCode) {
			noMorePosts.classList.remove('d-none');
		} else {
			noMorePosts.classList.add('d-none');
		}
		const divNotFound = showControl[currentPage].container.querySelector('.not-found');
		if (divNotFound) {
			distances.classList.add('d-none');
		}
		addEvents();
		window.dispatchEvent(eventScroll);
		window.scroll(0, showControl[currentPage].scrollYPos);
	} else {
		setTimeout(() => {
			enableElemsStart(callName);
		}, 1000);
	}
};


const showOnePost = postid => {
	backMenu.dataset['prevPage'] = currentPage;
	const postDocumentId = '#' + currentPage + '_postid_' + postid;
	const onePostFeed = document.querySelector(postDocumentId);
	if (!!onePostFeed) {
		showControl[currentPage].scrollYPos = window.pageYOffset;
			scrollFeed = window.pageYOffset;
			onePostShowned = 1;
			postsOne.textContent = '';
			let showPageName = ''; 
			if (!!onePostFeed.dataset.showPageName) {
				showPageName = onePostFeed.dataset.showPageName;
			}
			currentPage = showPageName;
			const collage = {};
			// collage.name = onePostFeed.querySelector('.post-link img').attributes.src.value;
			collage.name = onePostFeed.querySelector('.post-image').textContent;
			const user_picture = onePostFeed.querySelector('.user-data').dataset.avatar,
				user_name = onePostFeed.querySelector('.post-username').textContent,
				post_name = onePostFeed.querySelector('.post-title').textContent,
				text_adv = onePostFeed.querySelector('.post-text').firstChild.textContent,
				likes = onePostFeed.querySelector('.post-like').textContent,
				is_likes = onePostFeed.querySelector('.post-is_likes').textContent,
				is_bookmarks = onePostFeed.querySelector('.post-is_bookmarks').textContent,
				role_ad = onePostFeed.querySelector('.post-role_ad').textContent,
				hashtags = JSON.parse(onePostFeed.querySelector('.post-hashtags').innerText),
				city = onePostFeed.querySelector('.location-city').textContent,
				shortlink = onePostFeed.querySelector('.post-link').textContent,
				contactsList = {
					phone: onePostFeed.querySelector('.post-contact-phone').textContent,
					contact_email: onePostFeed.querySelector('.post-contact-email').textContent,
					address: onePostFeed.querySelector('.post-contact-address').textContent,
				};

			const post = createPost({postid, user_picture, user_name, collage, post_name, text_adv, likes, hashtags, shortlink, city, role_ad, contactsList, is_likes, is_bookmarks}, storage.getAppItem('isLogined'));
			const postContent = onePostFeed.querySelector('.post-content'),
				lat = parseFloat(postContent.dataset.lat),
				lng = parseFloat(postContent.dataset.lng);

				// document.querySelector('.hashtags-links').addEventListener('click', searchByTag);
			post.querySelector('.hashtags-links').addEventListener('click', searchByTag);
			post.querySelector('.post-action-group').addEventListener('click', (e) => {
				e.preventDefault();
				handlePostBtn(e.target, postDocumentId);
			});
			post.querySelector('.post-share').addEventListener('click', copyShareLink);
			
			postsOne.append(post);
			
			hidePageElems(showPageName, showControl);
			showPageElems(showPageName, showControl);
			noMorePosts.classList.add('d-none');
			window.scroll(0, 0);
		try {
			setPostCoordsMap(lat, lng, city);
		}
		catch (error) {	}
	}
};

const showMoreInfo = e => {
	const target = e.target;
	if(target.innerText.indexOf('more') > 0) {
		target.closest('.post-text').classList.remove('post-text-preview');
		target.innerText = '... less';
	} else {
		target.closest('.post-text').classList.add('post-text-preview');
		target.innerText = '... more';
	}
	e.stopPropagation();
};

const showHome = e => {
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

const showFeed = (e) => {
	e.preventDefault();
	if(currentPage === 'doStart') { 
		showHome(e);
		return;
	} else if(currentPage === 'showOnePost' && !!backMenu.dataset['prevPage']) {
		currentPage = backMenu.dataset['prevPage'];
	}
	enableElemsStart(currentPage);
	// distances.classList.remove('dist-one');
	distanceInfo.textContent = showControl[currentPage].zoneName;
	onePostShowned = 0;
};

const searchByTag = (e) => {
	e.preventDefault();
	const target = e.target;
	onePostShowned = 0;
	if (target.classList.contains('a-hashtag')) {
		currentPage =target.dataset['page'];
		const hashTag = target.dataset['hashtag'];
		if (!!hashTag && hashTag.trim().length > 2) {
			searchInput.value = hashTag;
			showControl[currentPage].callParams.keywords = hashTag;
			reloadCurrentPage();
		}
	}
};

const postsScroll = ( e, setZoneName = 0) => {
	// return false;
	const postsContainer = showControl[currentPage].container;
	const allVisible = Array.from(postsContainer.querySelectorAll('.post-feed')).filter(visible);
	if (!!allVisible[0] && !!allVisible[0].querySelector('.post-content')) {
		const zoneName = allVisible[0].querySelector('.post-content').dataset['zones'];
		if (!!zoneName) {
			distText.textContent = distTextHeader.textContent = zoneName;
		}
	}
	// if(scrollSearchActivated || onePostShowned || setZoneName) {
	// 	return false;
	// }

	// if (!scrollSearchActivated && !onePostShowned && (!document.querySelector(`.${commonModalOpenClass}`))) {
	if (!scrollSearchActivated && window.getComputedStyle(backMenu).display === 'none' && (!document.querySelector(`.${commonModalOpenClass}`))) {
		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
		if (windowRelativeBottom <= document.documentElement.clientHeight + 120) {
			doUploadPosts();
		}
	}
};

const switchLocality = (e) => {
	const target = e.target;
	let needInit = false;
	if(target.matches('.locality'))
	{
		e.preventDefault();
		if(target.matches('.locality-home') && localityStatus !== 'locality-home') {
			localityStatus = 'locality-home';
			needInit = true;
		} else if (target.matches('.locality-local') && localityStatus !== 'locality-local') {
			localityStatus = 'locality-local';
			needInit = true;
		}
		if (needInit) {
			storage.setGlobalItem({localityStatus: localityStatus});
			reloadCurrentPage();
		}
	}
};

const selectLocation = () => {
	const paramsLocation = {};
	localityStatus = storage.getLocalityStatus();
	localityHome.classList.remove('locality-selected');
	localityLocal.classList.add('locality-selected');
	if(localityStatus === 'locality-home')
	{
		const [lat, lng] = storage.getLocation();
		if(lat && lng) {
			paramsLocation.lat = lat;
			paramsLocation.lng = lng;
			localityHome.classList.add('locality-selected');
			localityLocal.classList.remove('locality-selected');
		}
	}
	return paramsLocation;
};

// const getCurrentPage = () => {
// 	for(let item of services) {
// 		if(item.matches('.service-selected')) {
// 			return item.dataset.service;
// 		}
// 	}
// };

const notFoundPosts = () => {
	const tempDiv = notFound.cloneNode(true);
	tempDiv.classList.remove('d-none');
	return tempDiv;
};

const reloadCurrentPage = () => {
	const params = selectLocation();
	URImod({
		'page': currentPage,
		'hashtag': searchInput.value,
		'lat': params.lat,
		'lng': params.lng,
	});
	showControl[currentPage].scrollYPos = 0;
	if (currentPage === 'service' || currentPage === 'project') {
		const hashTag = searchInput.value;
		showControl[currentPage].callParams.keywords = hashTag;
		goSearch(currentPage, hashTag, renderSearchPosts);
	} else if ( currentPage === 'all') {
		const hashTag = searchInput.value;
		showControl[currentPage].callParams.keywords = hashTag;
		goSearch(currentPage, hashTag, renderSearchAll);
	} else {
		postsStart.textContent = '';
		showFeedSearch();
	}
};

const clickSearchButton = () => {
	searchButton.dispatchEvent(eventClick);
};

const clickHomeButton = () => {
	workberHome.dispatchEvent(eventClick);
};

const clearSearchParam = () => {
	searchInput.value = '';
	// tabsServices.classList.add('d-hidden');
};

// const checkScrollBottom = () => {
// 	if(!scrollSearchActivated && !onePostShowned /* && !scrollDisabled */ && (!document.querySelector(`.${commonModalOpenClass}`))) {
// 		let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
// 		if (windowRelativeBottom <= document.documentElement.clientHeight + 120) {
// 			doUploadPosts();
// 		}
// 	}
// 	setTimeout(() => {
// 		checkScrollBottom();
// 	}, 100000);
// };

const doUploadPosts = () => {
	const postsContainer = showControl[currentPage].container;
	showControl[currentPage].scrollYPos = window.pageYOffset;
	scrollSearchActivated = 1;
	const last_postid = postsContainer.dataset.last_postid;
	const last_dist = postsContainer.dataset.last_dist;
	const code = postsContainer.dataset.code;
	if ((!!code && code == endSearchCode) || currentlyLoad < waitForLoad) {
		scrollSearchActivated = 0;
		if (code == endSearchCode) {
			noMorePosts.classList.remove('d-none');
		}
		return false;
	}
	const params = selectLocation();
	if(!!last_postid) {
		params.postid = last_postid;
	}
	if(!!last_dist) {
		params.dist = last_dist;
	}
	params.keywords = showControl[currentPage].callParams.keywords;
	let callBackRender = null;
	switch (currentPage) {
		case 'doStart':
			callBackRender = renderStartPosts;
			break;
		case 'project':
		case 'service':
			callBackRender = renderSearchPosts;
			break;
		case 'all':
			callBackRender = renderSearchAll;
			break;
		default:
			return false;
	}
	URImod({
		'page': currentPage,
		'hashtag': searchInput.value,
		'lat': params.lat,
		'lng': params.lng,
	});
	getDataSearch(createRequestParams(currentPage, showControl[currentPage].callParams, params), postsContainer, callBackRender);
	enableElemsStart(currentPage);
};



workberHome.addEventListener('click', showHome);
tabsServices.addEventListener('click', changeSearch);
backMenu.addEventListener('click', showFeed);

tabsLocality.addEventListener('click', switchLocality);
// btnSetLocaton.addEventListener('click', setLocation);
searchButton.addEventListener('click', searchPosts);
searchInput.addEventListener('keyup', (e) => {
	if(e.code == 'Enter') {
		clickSearchButton();
	} 
	// else if(searchInput.value.trim().length >= 3) {
	// 	tabsServices.classList.remove('d-hidden');
	// } else {
	// 	tabsServices.classList.add('d-hidden');
	// }
});
searchInput.addEventListener('change', (e) => {
	clickSearchButton();
	// if(searchInput.value.trim().length >= 3) {
	// 	tabsServices.classList.remove('d-hidden');
	// } else {
	// 	tabsServices.classList.add('d-hidden');
	// }
});



if (workberLogo) {
	workberLogo.src = workberImages + '/site' + '/Workber-logo.svg';
}

	renderModalSign('modal-overlay', '#login_acc');
	mapLoader();

	getUserProfile().then(profile => {
		let profileContainer;

		if (profile) {
			iconsPanel.style.display = '';
			if (userMenu) {
				btnloginAccount.classList.add('d-none');
				// userMenu.classList.remove('d-none');
				// smallAvatar.textContent = '';
				// smallAvatar.insertAdjacentHTML('beforeend',`
				// 	<img class="profile-avatar-small" src="${profile.profile.user_picture}" alt="user avatar">
				// `);
				// smallAvatar.classList.remove('d-none');
				// userMenu.classList.remove('d-none');
			}
			profileContainer = renderProfile(profile.profile, '#small_avatar', showControl);
			const profileDescription = profileContainer.querySelector('#user_descr');
			// const descriptionCounter = profileContainer.querySelector('#descriptionCounter');
			// profileDescription.innerText = profileDescription.innerText.trim().substring(0, maxDescriptionLength);
			// descriptionCounter.innerText = `${profileDescription.innerText.length}/${maxDescriptionLength}`;
			// profileDescription.addEventListener('keyup', (e) => {
			// 	cropDescription(e, descriptionCounter, maxDescriptionLength);
			// 	// (cursor_position(e.target));
			// });
			profileDescription.dispatchEvent(new Event('keyup'));

			document.querySelector('#small_avatar').addEventListener('click', (e) => {
				e.preventDefault();
				if (!document.body.contains(profileContainer)) {
					hidePageElems('profile', showControl);
					showPageElems('profile', showControl, profileContainer);
					URImod({
						'page': 'profile',
					});
				}
			});
		}

		if (!!mainPage) {
			storage.iniBrowserLocation();
			searchInput.value = '';
			const paramPage = paramsURI.get('page');
			if(!paramPage || pages.indexOf(paramPage) == -1) {
				clickHomeButton();
			} else {
				window.scroll(0, 0);
				if (paramPage == 'post' && (postid = paramsURI.get('postid'))) {
					getPostByID(postid, postsOne, renderOnePost);
				} else if (paramPage === 'profile') {
					if (profile) {
						hidePageElems(paramPage, showControl);
						showPageElems(paramPage, showControl, profileContainer);
						// document.body.append(profileContainer);
						// showControl[currentPage].container.classList.add('d-none');
					} else {
						clickHomeButton();
					}
				} else {
					if (paramPage === 'project') {
						toggleService('.service', searchProject, 'service-selected');
					} else if (paramPage === 'service') {
						toggleService('.service', searchService, 'service-selected');
					} else {

					}
					// tabsServices.classList.remove('d-hidden');
					const hashTag = paramsURI.get('hashtag');
					currentPage = paramPage;
					if(!!hashTag && hashTag.trim().length > 2) {
						searchInput.value = hashTag;
						showControl[paramPage].callParams.keywords = hashTag;
					}
					reloadCurrentPage();
				}
			}
			window.addEventListener('scroll', postsScroll);
			// checkScrollBottom();
		}
	});
}

});

