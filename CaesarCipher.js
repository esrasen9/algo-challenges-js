function caesarCipher(s, k) {
    const original = "abcdefghijklmnopqrstuvwxyz";
    if (k > original.length) {
        k = k % original.length;
    }
    const rotated = original.slice(k) + original.slice(0, k);
    let result = "";
    s.split("").map(char => {
        if (original.indexOf(char.toLowerCase()) >= 0 && original.indexOf(char) < 0) {
            result += rotated[original.indexOf(char.toLowerCase())].toUpperCase();
        } else if (original.indexOf(char.toUpperCase()) >= 0 && original.indexOf(char) < 0) {
            result += rotated[original.indexOf(char.toUpperCase())].toLowerCase();
        } else if (original.indexOf(char) < 0) {
            result += char
        } else {
            result += rotated[original.indexOf(char)]
        }
    })
    return result;
}