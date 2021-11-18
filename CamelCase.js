function camelcase(s) {
    const chars = s.split("");
    let word="";
    for(let i=0; i<chars.length; i++){
        if(s[i].toLowerCase() === s[i]){
            word += s[i];
        }
        else {
            word += `,${s[i]}`;
        }
    }
    return word.split(",").length;
}

console.log(camelcase("saveChangesInTheEditor"));