var Twit = require("./sources/twit/lib/twitter");
var T = new Twit({
    consumer_key: "BSA8bHv77iAmIE9qNn16vjZLB",
    consumer_secret: "JRxde88hiI10zknVWxodJ3QAuTstWxlid09n7gW1guqcSjwM9j",
    access_token: "1371097732111245316-pZ55lSMzPMf0QlBxFn9N8loxFxrxyT",
    access_token_secret: "lso2kOXUAe6828IleHI2SMYR65FrMPKR3QG8KcY3T1iYE",
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
});

console.log(T);
