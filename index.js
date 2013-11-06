"use strict";

var http = require("http");
var nodeStatic = require("node-static");

var staticServer = new nodeStatic.Server(".");

function requestHandler(request, response) {
    function requestEndListener() {
        staticServer.serve(request, response);
    }
    
    request.addListener('end', requestEndListener).resume();
}

http.createServer(requestHandler).listen(8080);