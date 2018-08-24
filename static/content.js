console.log("we made it");

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'import_creds') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument
        sendResponse({
            'affiliateurl':document.getElementById("affiliateurl"),
            'apikey':document.getElementById("apikey"),
        });
    }
});
