function findDigits(n) {
    const digits = n.toString();
    let temp=0;
    for(let i=0; i<digits.length; i++){
        if(digits[i] === "0") continue
        if(n % digits[i] === 0){
            temp++;
        }
    }
    return temp;
}