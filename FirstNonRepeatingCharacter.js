function firstNonRepeatingCharacter(string) {
    const chars = string.split("");
    const charHash = {};

    chars.forEach(item => {
        if (!charHash[item]) {
            charHash[item] = 1;
        } else {
            charHash[item]++;
        }
    });

    for (let i = 0; i < chars.length; i++) {
        const item = chars[i];
        if (charHash[item] === 1) {
            return i;
        }
    }

    return -1;
}