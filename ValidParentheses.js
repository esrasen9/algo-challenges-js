const isValid = (s) => {
    const openStack = [];
    const brackets = {
        ")" : "(",
        "}" : "{",
        "]" : "["
    }
    for(let i=0; i<s.length; i++){
        const bracket = s[i];
        if(!brackets[bracket]){
            openStack.push(bracket);
        }
        else if(openStack.pop() !== brackets[bracket]) {
            return false;
        }
    }
    return !openStack.length;
};