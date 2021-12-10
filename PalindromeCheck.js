function isPalindrome(string) {
    const stack = string.split('');

    for (let i = 0; i <= Math.floor(stack.length / 2); i++) {
        if (stack[i] !== stack.pop()) {
            return false
        }
    }
    return true;
}

console.log(isPalindrome("abcdcba"));