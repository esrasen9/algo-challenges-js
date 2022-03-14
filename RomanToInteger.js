const romanToInt = (s) => {
    let result = 0;
    const romanChars =
        {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

    for (let i = 0; i < s.length; i++) {
        const current = romanChars[s[i]];
        const next = romanChars[s[i + 1]];
        (current < next)
            ? result -= current
            : result += current;
    }
    return result;
};