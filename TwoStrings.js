function twoStrings(s1, s2) {
    const s1characters = s1.split("");
    return s1characters.find( (c)=> s2.includes(c)) ? "YES" : "NO";

}

console.log(twoStrings("hello","world"));