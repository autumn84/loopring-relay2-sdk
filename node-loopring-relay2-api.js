'use strict';

const request = require('request');
const url = require('url');

function LoopringRelay() {
	// TODO: url待定
	this.apiUrl = "http://**:8080/api/loopring";
}



LoopringRelay.prototype.getAccounts = function (requestId, requestData, callback = false) {
	request({
		url: this.apiUrl,
		method: "POST",
		json: true,
		headers: {
	    	"content-type": "application/json",
		},
		body : {jsonrpc: "2.0",  id: requestId, method: "get_account", params: requestData}
	}, function(error, response, body) {
	    if (!error) {
	    	console.log(response.statusCode);
	    	console.log(body.result.accountBalance.tokenBalanceMap);
	    } else {
	    	console.error("error: " + error);
	    }
	}); 
};

LoopringRelay.prototype.cancelOrders = function (requestData, callback = false) {
	request({
		url: this.apiUrl,
	    method: "POST",
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: {jsonrpc: "2.0", id: "1", method: "cancel_orders", params: requestData}
	}, function(error, response, body) {
	    if (!error) {
	    	console.log(response.statusCode);
	    	console.log(body.result.accountBalance.tokenBalanceMap);
	    } else {
	    	console.error("error: " + error);
	    }
	}); 
};

LoopringRelay.prototype.submitOrder = function (requestData, callback = false) {
	request({
		url: this.apiUrl,
	    method: "POST",
	    json: true,
	    headers: {
	        "content-type": "application/json",
	    },
	    body: {jsonrpc: "2.0", id: "1", method: "submit_order", params: requestData}
	}, function(error, response, body) {
	    if (!error) {
	    	console.log(response.statusCode);
	    	console.log(body.result.accountBalance.tokenBalanceMap);
	    } else {
	    	console.error("error: " + error);
	    }
	}); 
};



module.exports = LoopringRelay;