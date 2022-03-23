const lengthOfLastWord = (s) => {
    let res = 0;
    let temp = s.length;
    while(temp > 0){
        temp--;
        if(s[temp] !== " "){
            res++;
            continue;
        }
        if(res !== 0) {
            return res;
        }
    }
    return res;
};

const lengthOfLastWord = (s) => {
    s = s.trim();
    return s.split(" ").pop().length;
};