function sortedSquaredArray(array) {
    const squaredArray = [];
    for (let i = 0; i < array.length; i++) {
        squaredArray.push(array[i] * array[i]);
    }
    return squaredArray.sort((a, b) => a - b);
}
