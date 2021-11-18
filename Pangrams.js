function pangrams(s) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"];
    const letters = s.split(" ").join("").toLowerCase().split("");
    for(let i=0; i<alphabet.length;i++){
        if(!letters.includes(alphabet[i])){
            return "not pangram";
        }
    }
    return "pangram";
}