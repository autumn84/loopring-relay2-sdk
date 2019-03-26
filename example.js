var LoopringRelay = require('./node-loopring-relay2-api');

var request = {address: "0xe20cf871f1646d8651ee9dc95aab1d93160b3467", tokens: []};
request.tokens.push("0x97241525fe425c90ebe5a41127816dcfa5954b06");

var loopringRelay = new LoopringRelay();

loopringRelay.getAccounts(10, request);
