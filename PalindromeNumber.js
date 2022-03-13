const isPalindrome = (x) => {
    const temp = x.toString().split("");
    while (temp.length > 1) {
        let c1 = temp.shift();
        let c2 = temp.pop()
        if (c1 !== c2) {
            return false;
        }
    }
    return true;
};