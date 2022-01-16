function kangaroo(x1, v1, x2, v2) {
    if (x2 > x1 && v2 > v1 || x1 > x2 && v1 > v2) {
        return "NO";
    }
    // x1 + (n*v1) = x2 + (n*v2) => must be true
    // x1 - x2 / v2 - v1 = n
    // n must be an integer
    const res = (x1 - x2) % (v2 - v1);
    return res === 0 ? "YES" : "NO";
}