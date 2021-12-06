function hurdleRace(k, height) {
    const max = Math.max(...height);
    return max > k ? max - k : 0;
}
