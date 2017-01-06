const client = {
    getResource(resource, options = {}) {
        let url = `/api/${resource}`;
        return fetch(url, options)
            .then(raw => raw.json())
            .then(json => json._embedded[resource]);
    },

    newResource(resource, options = {}) {
    	options = Object.assign({
    		method: 'POST',
			headers: {
    			'Content-Type': 'application/json'
    		}
    	}, options);

        let url = `/api/${resource}`;
        return fetch(url, options)
            .then(raw => raw.json());
    }
};

module.exports = client;
