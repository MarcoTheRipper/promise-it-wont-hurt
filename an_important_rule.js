function alwaysThrows () {
    throw new Error('OH NOES')
}

function iterate(val) {
    console.log(val);
    return val+1
}

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, (err) => {
    console.log(err.message)
})