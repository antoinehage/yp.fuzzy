'use strict';
var soajs = require('soajs');
var config = require('./config.js');
var clj_fuzzy = require('clj-fuzzy');
var keyword_extractor = require("keyword-extractor");

var service = new soajs.server.service(config);
service.init(function () {

    var lib = {
        'extractorino': function (ln, text) {
            var language = "english";
            if (ln === "fr")
                language = "french";
            var extracted = keyword_extractor.extract(text, {
                remove_digits: true,
                return_changed_case: true,
                return_chained_words: true,
                remove_duplicates: true
            });
            extracted.sort();
            extracted = extracted.join(" ");
            return extracted;
        }
    };

    service.get("/metrics", function (req, res) {
        var w1 = lib.extractorino(req.soajs.inputmaskData.ln, req.soajs.inputmaskData.w1);
        var w2 = lib.extractorino(req.soajs.inputmaskData.ln, req.soajs.inputmaskData.w2);
        var answer = clj_fuzzy.metrics[req.soajs.inputmaskData.m](w1, w2);
        res.jsonp(req.soajs.buildResponse(null, {"answer": answer}));
    });
    service.get("/stemmers", function (req, res) {
        var w = lib.extractorino(req.soajs.inputmaskData.ln, req.soajs.inputmaskData.w);
        var answer = clj_fuzzy.stemmers[req.soajs.inputmaskData.m](w);
        res.jsonp(req.soajs.buildResponse(null, {"answer": answer}));
    });
    service.get("/phonetics", function (req, res) {
        var w = lib.extractorino(req.soajs.inputmaskData.ln, req.soajs.inputmaskData.w);
        var answer = clj_fuzzy.phonetics[req.soajs.inputmaskData.m](w);
        res.jsonp(req.soajs.buildResponse(null, {"answer": answer}));
    });

    service.get("/match", function (req, res) {
        var n1 = lib.extractorino(req.soajs.inputmaskData.ln, req.soajs.inputmaskData.n1);
        var n2 = lib.extractorino(req.soajs.inputmaskData.ln, req.soajs.inputmaskData.n2);
        var algo = req.soajs.inputmaskData.m;
        var answer = clj_fuzzy.metrics[algo](n1, n2);
        console.log("----> " + req.soajs.inputmaskData.ln + " / " + n1 + " / " + n2 + " / " + algo + " / " + answer);
        res.jsonp(req.soajs.buildResponse(null, {"answer": (answer >= 0.80)}));
    });

    service.start();
});
