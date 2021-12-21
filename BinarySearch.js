function binarySearch(array, target) {
    const m = Math.floor(array.length / 2);
    const middleItem = array[m];
    let start, finish;
    if (middleItem > target) {
        start = 0;
        finish = m;
    } else {
        start = m;
        finish = array.length;
    }
    for (let i = start; i < finish; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}