function moveElementToEnd(array, toMove) {
    let {length} = array;
    let j = length - 1;
    for (let i = 0; i < length; i++) {
        while (array[j] === toMove) j--;
        if (array[i] === toMove && i < j) {
            toggleOrder(array, i, j);
            j--;
        }
    }
    return array;
}

function toggleOrder(array, i1, i2) {
    let left = array[i2];
    array[i2] = array[i1];
    array[i1] = left;
}