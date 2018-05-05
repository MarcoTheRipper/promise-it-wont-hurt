var qio = require('q-io/http');

function readDB(userid) {
    return qio.read('http://localhost:7001/'+userid)
}

function logger(data) {
    console.log(JSON.parse(data))
}

qio.read('http://localhost:7000').then(readDB).then(logger)