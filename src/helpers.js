var fuzzyStringMatch = function(text, query) {
	if (query.indexOf(text) > -1) {
		return 'FUZZY MATCH';
	}
	else {
		return 'NO MATCH';
	}
};
