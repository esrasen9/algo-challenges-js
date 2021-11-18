function findMedian(arr) {
    arr.sort((a,b)=> a-b);
    const mediumIndex = parseInt(arr.length / 2 );
    return arr[mediumIndex];
}