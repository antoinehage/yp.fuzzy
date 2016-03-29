'use strict';

module.exports = {
    serviceName: "yp.fuzzy",
    serviceVersion : 1,
    servicePort: 4501,
    serviceGroup: "YP Group",
    extKeyRequired: false,
    type: "service",
    multi: null, //not necessary
    prerequisites: {
        cpu: '',
        memory: ''
    },
    src: {
        repo: 'yp.fuzzy',
        owner: 'antoinehage',
        main: '/index.js'
    },
    "errors": {},
    "schema": {
        "/metrics": {
            "_apiInfo": {
                "l": "metrics api"
            },
            "w1": {
                "source": ['query.w1'],
                "required": true,
                "validation": {
                    "type": "string"
                }
            },
            "w2": {
                "source": ['query.w2'],
                "required": true,
                "validation": {
                    "type": "string"
                }
            },
            "m": {
                "source": ['query.m'],
                "required": true,
                "validation": {
                    "type": "string",
                    "enum": ['dice', 'sorensen', 'levenshtein', 'hamming', 'jaccard', 'tanimoto', 'jaro', 'jaro_winkler', 'mra_comparison', 'tversky']
                }
            },
            "ln": {
                "source": ['query.ln'],
                "required": false,
                "default": "en",
                "validation": {
                    "type": "string",
                    "enum": ['en', 'fr']
                }
            }
        },
        "/stemmers": {
            "_apiInfo": {
                "l": "stemmers api"
            },
            "w": {
                "source": ['query.w'],
                "required": true,
                "validation": {
                    "type": "string"
                }
            },
            "m": {
                "source": ['query.m'],
                "required": true,
                "validation": {
                    "type": "string",
                    "enum": ['lancaster', 'lovins', 'porter', 'schinke']
                }
            },
            "ln": {
                "source": ['query.ln'],
                "required": false,
                "default": "en",
                "validation": {
                    "type": "string",
                    "enum": ['en', 'fr']
                }
            }
        },
        "/phonetics": {
            "_apiInfo": {
                "l": "phonetics api"
            },
            "w": {
                "source": ['query.w'],
                "required": true,
                "validation": {
                    "type": "string"
                }
            },
            "m": {
                "source": ['query.m'],
                "required": true,
                "validation": {
                    "type": "string",
                    "enum": ['metaphone', 'double_metaphone', 'soundex', 'nysiis', 'caverphone', 'cologne', 'mra_codex']
                }
            },
            "ln": {
                "source": ['query.ln'],
                "required": false,
                "default": "en",
                "validation": {
                    "type": "string",
                    "enum": ['en', 'fr']
                }
            }
        },
        "/match": {
            "_apiInfo": {
                "l": "Business name matching api"
            },
            "n1": {
                "source": ['query.n1'],
                "required": true,
                "validation": {
                    "type": "string"
                }
            },
            "n2": {
                "source": ['query.n2'],
                "required": true,
                "validation": {
                    "type": "string"
                }
            },
            "ln": {
                "source": ['query.ln'],
                "required": false,
                "default": "en",
                "validation": {
                    "type": "string",
                    "enum": ['en', 'fr']
                }
            },
            "m": {
                "source": ['query.m'],
                "required": false,
                "default": "jaro",
                "validation": {
                    "type": "string",
                    "enum": ['dice', 'sorensen', 'levenshtein', 'hamming', 'jaccard', 'tanimoto', 'jaro', 'jaro_winkler', 'mra_comparison', 'tversky']
                }
            }
        }
    }
};