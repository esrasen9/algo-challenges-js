function permutationEquation(p) {
    const result = [];
    for (let num of p) {
        let temp1 = p[num - 1] - 1;
        let temp2 = p[temp1] - 1;
        result[temp2] = num;
    }
    return result;
}