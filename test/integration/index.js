"use strict";

var assert = require('assert');
var request = require("request");
var helper = require("../helper.js");
var srv = helper.requireModule('index');

describe("FUZZY SERVICE API TESTS", function () {

    before(function (done) {
        console.log('starting tests ....');
        setTimeout(function () {
            done();
        }, 500);
    });

    beforeEach(function (done) {
        console.log(' ------------------------------------------------- ');
        done();
    });

    describe("metrics route", function () {
        it('fail - no params', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics/'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, false);
                assert.ok(body.errors);
                assert.deepEqual(body.errors.details[0], {"code": 172, "message": "Missing required field: w1, w2, m"});
                done();
            });
        });

        it('fail - wrong mathod', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=antoine&w1=healed&w2=sealed'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, false);
                assert.ok(body.errors);
                assert.deepEqual(body.errors.details[0], {
                    "code": 173,
                    "message": "Validation failed for field: m -> The parameter 'm' failed due to: instance is not one of enum values: dice,sorensen,levenshtein,hamming,jaccard,tanimoto,jaro,jaro_winkler,mra_comparison,tversky"
                });
                done();
            });
        });

        it('success - dice', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=dice&w1=healed&w2=sealed'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - sorensen', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=sorensen&w1=healed&w2=sealed'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - levenshtein', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=levenshtein&w1=book&w2=back'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - hamming', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=hamming&w1=ramer&w2=cases'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - jaccard', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=jaccard&w1=night&w2=nacht'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - tanimoto', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=tanimoto&w1=night&w2=nacht'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - jaro', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=jaro&w1=Dwayne&w2=Duane'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - jaro_winkler', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=jaro_winkler&w1=Dwayne&w2=Dwayne'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - mra_comparison', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=mra_comparison&w1=Byrne&w2=Boern'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - tversky', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/metrics?m=tversky&w1=night&w2=nacht'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });
    });

    describe("stemmers route", function () {
        it('fail - no params', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/stemmers/'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, false);
                assert.ok(body.errors);
                assert.deepEqual(body.errors.details[0], {"code": 172, "message": "Missing required field: w, m"});
                done();
            });
        });

        it('success - lancaster', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/stemmers?m=lancaster&w=worker'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - lovins', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/stemmers?m=lovins&w=nationality'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - porter', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/stemmers?m=porter&w=adjective'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - schinke', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/stemmers?m=schinke&w=apparebunt'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });
    });

    describe("phonetics route", function () {
        it('fail - no params', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics/'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, false);
                assert.ok(body.errors);
                assert.deepEqual(body.errors.details[0], {"code": 172, "message": "Missing required field: w, m"});
                done();
            });
        });

        it('success - lancaster', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics?m=metaphone&w=hypocrite'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - double_metaphone', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics?m=double_metaphone&w=Smith'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - soundex', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics?m=soundex&w=Ashcroft'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - nysiis', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics?m=nysiis&w=Andrew'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - caverphone', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics?m=caverphone&w=Henrichsen'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - cologne', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics?m=cologne&w=Breschnew'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });

        it('success - mra_codex', function (done) {
            var params = {
                uri: 'http://127.0.0.1:4500/phonetics?m=mra_codex&w=Catherine'
            };
            helper.requester('get', params, function (err, body, req) {
                assert.ifError(err);
                assert.ok(body);
                assert.equal(body.result, true);
                assert.ok(body.data);
                assert.ok(body.data.answer);
                done();
            });
        });
    });
});