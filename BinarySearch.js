function binarySearch(array, target) {
    return helper(array, target, 0, array.length - 1)
}

function helper(array, target, left, right) {
    if (left > right) return -1;
    const m = Math.floor((left + right) / 2);
    const middleItem = array[m];
    if (middleItem === target) return m;
    else if (middleItem > target) return helper(array, target, 0, m - 1)
    else return helper(array, target, m + 1, right);
}