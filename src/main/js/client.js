const client = {
	fetch(resource, options = {}) {
		let url = `/api/${resource}`;
		return fetch(url, options)
			.then(raw => raw.json())
			.then(json => json._embedded[resource]);
	}
};

module.exports = client;
