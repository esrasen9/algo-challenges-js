function saveThePrisoner(n, m, s) {
    let last = (m + s - 1) % n;
    if (last === 0)
        last = n;
    return last;
}