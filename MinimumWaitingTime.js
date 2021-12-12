function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b);
    let temp = 0;
    let res = 0;
    for (let i = 1; i < queries.length; i++) {
        temp += queries[i - 1];
        res += temp;
    }
    return res;
}

//17
console.log(minimumWaitingTime([3, 2, 1, 2, 6]));