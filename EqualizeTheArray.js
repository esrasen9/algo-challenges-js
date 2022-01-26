function equalizeArray(arr) {
    let repeatCountObj = {}
    for (let num of arr) {
        repeatCountObj[num] = repeatCountObj[num] + 1 || 1
    }
    return arr.length - Math.max(...Object.values(repeatCountObj));
}