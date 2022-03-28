export const postsOffer = document.querySelector('.posts-offer');
export const postsStart = document.querySelector('.posts-start');
export const postsNeed = document.querySelector('.posts-need');
export const postsAll = document.querySelector('.posts-all');
export const postsOne = document.querySelector('.post-one');

export const showControl = {
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
};
