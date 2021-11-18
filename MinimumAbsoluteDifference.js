function minimumAbsoluteDifference(arr) {
    const { length } = arr;
    const tempArr = arr.sort();
    let min = Infinity;
    for(let i=1; i<length; i++){
        let current = tempArr[i];
        let prev = tempArr[i-1];
        let diff = Math.abs(prev - current);
        min = Math.min(min,diff)
    }
    return min;
}