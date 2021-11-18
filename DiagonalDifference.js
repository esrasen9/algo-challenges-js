function diagonalDifference(arr) {
    const n = arr.length;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    let j = n-1;
    for(let i=0; i<n; i++){
        secondaryDiagonal += arr[i][j];
        primaryDiagonal += arr[i][i];
        j--;
    }
    return Math.abs(primaryDiagonal - secondaryDiagonal);
}