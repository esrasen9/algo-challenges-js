function isBalanced(s) {
    const stack = [];
    const length = s.length;
    for(let i=0; i<length; i++){
        const temp1 = s[i];
        if(temp1 === "(" || temp1 === "[" || temp1=== "{") {
            stack.push(temp1);
        }
        else {
            if(stack.length === 0){
                return "NO";
            }
            else {
                const topStack = stack.pop();
                if(s[i] === ")" && topStack !=="("){
                    return "NO";
                }
                else if(s[i] === "}" && topStack !=="{"){
                    return "NO";
                }
                else if(s[i] === "]" && topStack !=="["){
                    return "NO";
                }
            }
        }
    }
    return stack.length === 0 ?  "YES" :  "NO";
}