first().then((firstProm) => {
    return second(firstProm);
}).then(console.log)