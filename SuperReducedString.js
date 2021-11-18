function superReducedString(s) {
    let stack = [];
    for(let i=0; i<s.length; i++){
        let currentLength = stack.length;
        const lastChar = stack[currentLength-1];
        (s[i] === lastChar) ? stack.pop() : stack.push(s[i])
    }
    return stack.length > 0 ? stack.join("") : "Empty String";
}

console.log(superReducedString("aaabccddd"));