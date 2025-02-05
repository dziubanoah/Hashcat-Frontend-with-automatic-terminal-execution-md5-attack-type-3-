import http from "http";
import express from "express";
import url from "url";

http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    if(req.method == "POST") {
        let body = "";
        req.on("data", chunk => {
            body += chunk
        });
    }

}).listen(8080);