function pickingNumbers(a) {
    a.sort((i, j) => i - j);
    const {length} = a;
    let count = 1;
    let maxCount = 0;
    let first = a[0];
    const last = a[length - 1];
    if (first === last) {
        maxCount = length;
    } else {
        for (let i = 1; i < length; i++) {
            if (a[i] - first <= 1) {
                count++;
            } else {
                if (count > maxCount) {
                    maxCount = count;
                }
                first = a[i];
                count = 1;
            }
        }
    }
    return maxCount;
}