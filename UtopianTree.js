function utopianTree(n) {
    let h = 1;
    for (let i = 1; i <= n; i++) {
        (i % 2 !== 0) ? h *= 2 : h++;
    }
    return h;
}