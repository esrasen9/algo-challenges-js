function marsExploration(s) {
    const signal = ["S","O","S"];
    let counter = 0;
    for(let i=0; i<s.length; i+=3){
        const temp = s.slice(i,i+3);
        temp.split("").map((char,index) => {
            if(char !== signal[index]) counter++;
        });
    }
    return counter;
}

console.log(marsExploration("SOSOOSOSOSOSOSSOSOSOSOSOSOS"));