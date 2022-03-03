function gemstones(arr) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let count = 26;
    alphabet.forEach((char) => {
        for (let rock of arr) {
            if (!rock.includes(char)) {
                count--;
                break;
            }
        }
    })
    return count;
}