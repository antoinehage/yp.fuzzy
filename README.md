# yp.fuzzy


##Installation

```sh
$ mkdir -p /opt/node_modules
$ cd /opt/node_modules
$ npm install soajs
$ git clone git@github.com:antoinehage/yp.fuzzy.git
$ cd yp.fuzzy
$ npm install
```

---

You are now ready to run the service.

```sh
$ node .
```

---

## API Documentation 

the microservice supports 3 main fuzzy APIs

### /metrics
http://127.0.0.1:4500/metrics?m=dice&w1=healed&w2=sealed
http://127.0.0.1:4500/metrics?m=sorensen&w1=healed&w2=sealed
http://127.0.0.1:4500/metrics?m=levenshtein&w1=book&w2=back
http://127.0.0.1:4500/metrics?m=hamming&w1=ramer&w2=cases
http://127.0.0.1:4500/metrics?m=jaccard&w1=night&w2=nacht
http://127.0.0.1:4500/metrics?m=tanimoto&w1=night&w2=nacht
http://127.0.0.1:4500/metrics?m=jaro&w1=Dwayne&w2=Duane
http://127.0.0.1:4500/metrics?m=jaro_winkler&w1=Dwayne&w2=Dwayne
http://127.0.0.1:4500/metrics?m=mra_comparison&w1=Byrne&w2=Boern
http://127.0.0.1:4500/metrics?m=tversky&w1=night&w2=nacht

### /stemmers
http://127.0.0.1:4500/stemmers?m=lancaster&w=worker
http://127.0.0.1:4500/stemmers?m=lovins&w=nationality
http://127.0.0.1:4500/stemmers?m=porter&w=adjective
http://127.0.0.1:4500/stemmers?m=schinke&w=apparebunt

### /phonetics
http://127.0.0.1:4500/phonetics?m=metaphone&w=hypocrite
http://127.0.0.1:4500/phonetics?m=double_metaphone&w=Smith
http://127.0.0.1:4500/phonetics?m=soundex&w=Ashcroft
http://127.0.0.1:4500/phonetics?m=nysiis&w=Andrew
http://127.0.0.1:4500/phonetics?m=caverphone&w=Henrichsen
http://127.0.0.1:4500/phonetics?m=cologne&w=Breschnew
http://127.0.0.1:4500/phonetics?m=mra_codex&w=Catherine