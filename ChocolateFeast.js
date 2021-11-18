function chocolateFeast(n, c, m) {
    let wrapperCount = Math.floor(n / c);
    let total = wrapperCount;
    while(wrapperCount >= m){
        const freeBarCount = Math.floor(wrapperCount / m);
        total += freeBarCount;
        wrapperCount =freeBarCount + (wrapperCount % m);
    }
    return total;
}

console.log(chocolateFeast(10,2,5));
console.log(chocolateFeast(12,4,4));
console.log(chocolateFeast(6,2,2));