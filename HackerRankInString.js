function hackerrankInString(s) {
    const word = "hackerrank";
    let i = 0;
    let count = 0;
    for (let j = 0; j < s.length; j++) {
        let char = word[i];
        if (s[j] === char) {
            count++;
            i++;
        }
    }
    return count === word.length ? "YES" : "NO";
}