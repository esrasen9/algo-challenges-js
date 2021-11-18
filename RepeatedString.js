function repeatedString(s, n) {
    if(s.length === 1 && s==="a") return n;
    const sCount = Math.floor(n / s.length);
    let aCount = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] === "a") aCount++;
    }
    aCount = sCount*aCount;
    const remainingCharCount = n % s.length;
    if(remainingCharCount > 0){
        for(let i=0; i< remainingCharCount; i++){
            if(s[i] === "a") aCount++;
        }
    }
    return aCount;
}

console.log(repeatedString("aba",10));