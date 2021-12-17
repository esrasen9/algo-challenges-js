function generateDocument(characters, document) {
    const availableChars = characters.split("");
    const documentChars = document.split("");

    for (let i = 0; i < documentChars.length; i++) {
        const char = documentChars[i];
        const index = availableChars.indexOf(char);
        if (index < 0) return false;
        else availableChars[index] = "";
    }
    return true;
}