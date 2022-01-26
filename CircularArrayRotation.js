function circularArrayRotation(a, k, queries) {
    const result = [];
    while (k > 0) {
        const temp = a.pop();
        a.unshift(temp);
        k--;
    }
    queries.forEach(q => result.push(a[q]));
    return result;
}