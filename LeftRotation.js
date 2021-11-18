function rotLeft(a, d) {
    const temp1 = a.slice(d);
    const temp2 = a.slice(0,d);
    return [...temp1,...temp2];
}