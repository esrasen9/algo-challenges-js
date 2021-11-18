function alternatingCharacters(s) {
    const chars = s.split("");
    let temp=0;
    chars.map((char,index) => {
        if(char === chars[index+1]){
            temp++;
        }
    })
    return temp;
}