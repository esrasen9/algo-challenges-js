function isMonotonic(array) {
    let isGrowing = (array[0] < array[array.length - 1]);
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1] && isGrowing) {
            return false;
        }
        if (array[i] > array[i - 1] && !isGrowing) {
            return false;
        }
    }
    return true;
}
