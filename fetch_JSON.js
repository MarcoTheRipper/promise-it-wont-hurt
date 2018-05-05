var qio = require('q-io/http');

function logger(response) {
    console.log(JSON.parse(response))
} 

qio.read('http://localhost:1337').then(logger)