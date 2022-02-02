function firstDuplicateValue(array) {
    const tempArr = [];
    for (let num of array) {
        if (tempArr.includes(num)) {
            return num;
        }
        tempArr.push(num);
    }
    return -1;
}

//Solution 2
function firstDuplicateValue2(array) {
    const temp = new Set();
    for (let num of array) {
        if (temp.has(num)) {
            return num;
        }
        temp.add(num);
    }
    return -1;
}