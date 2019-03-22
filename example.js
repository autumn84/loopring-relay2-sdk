var LoopringRelay = require('./relay2-api');

var parameters = {addresses: "0xb94065482ad64d4c2b9252358d746b39e820a582"};

var loopringRelay = new LoopringRelay();

loopringRelay.getAccounts(parameters);