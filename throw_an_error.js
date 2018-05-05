function parsePromised (val) {
    var prom = new Promise((fullfill, reject) => {
    try {
        fullfill(JSON.parse(val))
    } catch (e) {
        reject(e.message)
    }
    })
    return prom
}


parsePromised(process.argv[2]).then(null, console.log)