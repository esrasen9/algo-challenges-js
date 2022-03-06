function strangeCounter(t) {
    let temp = 3;
    while (t > temp) {
        t -= temp;
        temp *= 2;
    }
    return temp - t + 1;
}