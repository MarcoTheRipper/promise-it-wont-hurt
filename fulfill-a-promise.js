var promise = new Promise(function (fulfill, reject) {
    setTimeout( () => {
    fulfill('FULFILLED!')
    }, 300)
});
    
promise.then(function (fulfill) {
    console.log(fulfill);
});