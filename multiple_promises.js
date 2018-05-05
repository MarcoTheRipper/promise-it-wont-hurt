function all (prom1, prom2) {
    var intPromise = new Promise((fulfill, reject) => {
        var count = 0;
        var output = [];
        
        prom1.then(function(elem) {count++;go(elem)})
        prom2.then(function(elem) {count++;go(elem)})
        
        function go(elem){
            output.push(elem)
            if (count == 2) {
                fulfill(output)
            }
        }
    })
    return intPromise;
}

all(getPromise1(), getPromise2()).then(console.log)