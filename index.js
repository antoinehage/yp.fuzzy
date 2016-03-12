'use strict';
var soajs = require('soajs');
var config = require('./config.js');
var clj_fuzzy = require('clj-fuzzy');

var service = new soajs.server.service(config);
service.init(function () {

    service.get("/metrics", function (req, res) {
        var answer = clj_fuzzy.metrics[req.soajs.inputmaskData.m](req.soajs.inputmaskData.w1, req.soajs.inputmaskData.w2);
        res.jsonp(req.soajs.buildResponse(null, {"answer": answer}));
    });
    service.get("/stemmers", function (req, res) {
        var answer = clj_fuzzy.stemmers[req.soajs.inputmaskData.m](req.soajs.inputmaskData.w);
        res.jsonp(req.soajs.buildResponse(null, {"answer": answer}));
    });
    service.get("/phonetics", function (req, res) {
        var answer = clj_fuzzy.phonetics[req.soajs.inputmaskData.m](req.soajs.inputmaskData.w);
        res.jsonp(req.soajs.buildResponse(null, {"answer": answer}));
    });

    service.start();
});
