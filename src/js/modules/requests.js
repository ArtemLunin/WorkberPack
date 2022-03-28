export const createRequestParams = (callName, originParams, priorParams) => {
	let call = 0;
	const params = {};
	
	// originParam
	params['currentPageName'] = callName;
	if(originParams) {
		// apply priorParams first
		for(let item in priorParams) {
			if(!!priorParams[item]) {
				params[item] = priorParams[item];
			}
		}
		for(let item in originParams) {
			if(item == 'call') {
				call = originParams[item];
				continue;
			}
			if(originParams[item] !== null && !params[item]) {
				params[item] = originParams[item];
			}
		}
	}
	if (call !== 0) {
		return {'call': call, params};
	}
	return false;
};