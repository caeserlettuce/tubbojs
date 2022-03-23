//1.
var http = require('http');
var fs = require('fs');
var mug = require('./functions');
var tubbo = require('./tubbo');

// init

var contentMap = {  // here you add the key as what you want the page to be, and the value as the path to the html file you want it to serve

    '/': 'html/index.html',
    '/404': '404/index.html'
}

function requestPgag(page, resp) {
    fs.readFile(page, function (error, pgResp) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are Not Found');
        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(pgResp);
        }
        resp.end();
    });
}



var server = http.createServer(function (req, resp) {   // da server 
    mug.log(`requesting from url ${req.url}`);
    if (contentMap[req.url]) {                          // if page is in the registry of pages
        mug.log(`'${req.url}' exists!`);
        requestPgag(contentMap[req.url], resp);
    } else {                                            // if it is not existent
        mug.log(`'${req.url}' does not exist lol nerd`);
        requestPgag("404/index.html", resp);
    }

    
});
//5.
server.listen(5050);
 
mug.log('Server Started listening on 5050');

tubbo.deb("testing tm", "test");
