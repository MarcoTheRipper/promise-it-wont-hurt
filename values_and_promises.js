var attachTitle = function (val) {
    return 'DR. '+val
}

var prom = Promise.resolve('MANHATTAN')

prom
.then(attachTitle)
.then(console.log)