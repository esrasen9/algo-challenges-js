function funnyString(s) {
    const chars = s.split("");
    let j = s.length - 1;
    for (let i = 1; i < chars.length; i++) {
        if (getDiff(chars, i) !== getDiff(chars, j)) {
            return "Not Funny";
        }
        j--;
    }
    return "Funny";
}

function getDiff(arr, idx) {
    return Math.abs(arr[idx].charCodeAt(0) - arr[idx - 1].charCodeAt(0));
}