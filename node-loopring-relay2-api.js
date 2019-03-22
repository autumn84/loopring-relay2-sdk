'use strict';

const request = require('request');
const url = require('url');

function LoopringRelay() {

	this.apiUrl = "";
}

LoopringRelay.prototype.getAccounts = function (requestData, callback = false) {
	request({
		url: this.apiUrl,
	    method: "POST",
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: JSON.stringify(requestData)
	}, function(error, response, body) {
	    if (!error && response.statusCode == 200) {
	    	console.log(response);
	    	console.log(body);
	    } else {
	    	console.error(error);
	    }
	}); 
};

module.exports = LoopringRelay;