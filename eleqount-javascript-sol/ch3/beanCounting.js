const countBs = function(str, char) {
    let bs = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char)
            bs++;
    }
    return bs;
}

console.log(countBs("BTSS", 'S'));