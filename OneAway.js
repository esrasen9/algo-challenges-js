function getChars(str){
    const charObj = {};
    for (let char of str){
        charObj[char] ? charObj[char]++ : charObj[char] = 1;
    }
    return charObj;
}

function oneAway(str1, str2) {
    let count = 0;
    const chars1 = getChars(str1);
    const chars2 = getChars(str2);
    for(let char in chars1){
        if(chars1[char] !== chars2[char]){
            count++;
        }
        if(count > 1){
            return false;
        }
    }
    return true;
}

console.log(oneAway("pale","ple"));
console.log(oneAway("pales","pale"));
console.log(oneAway("pale","kale"));
console.log(oneAway("pale","bake"));