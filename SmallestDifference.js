function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b);
    arrayTwo.sort((a, b) => a - b);

    let smallestDifference = Math.abs(arrayOne[0] - arrayTwo[0]);
    let res = [];
    let i = 0;
    let j = 0;

    while (i < arrayOne.length && j < arrayTwo.length) {
        const diff = Math.abs(arrayOne[i] - arrayTwo[j]);
        if (diff < smallestDifference) {
            smallestDifference = diff;
            res[0] = arrayOne[i];
            res[1] = arrayTwo[j];
        }
        (arrayOne[i] < arrayTwo[j]) ? i++ : j++;
    }
    return res;
}