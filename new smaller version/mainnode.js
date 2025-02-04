import http from "http";
import express from "express";
import childprocess from "express";

http.createServer(function (req, res) {
    res.write("Hallo");
    res.end();
}).listen(8080);