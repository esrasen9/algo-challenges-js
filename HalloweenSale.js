function howManyGames(p, d, m, s) {
    let count = 0;
    while (s - p >= 0) {
        s -= p;
        p = (p - d > m) ? p - d : m;
        count++;
    }
    return count;
}