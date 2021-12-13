function runLengthEncoding(string) {
    let res = [];
    let count = 1;
    const chars = string.split("");
    for (let i = 1; i <= chars.length; i++) {
        const curr = chars[i];
        const prev = chars[i - 1];
        if (curr !== prev || count === 9) {
            res.push(count, prev);
            count = 0;
        }

        count++;
    }
    return res.join("");
}