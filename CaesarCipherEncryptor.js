function caesarCipherEncryptor(string, key) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let currentIndex = alphabet.indexOf(string[i]);
        let newIndex = (currentIndex + key) % 26;
        result += alphabet[newIndex];
    }
    return result;
}