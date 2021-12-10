function nonConstructibleChange(coins) {
    coins.sort((a,b) => a-b);
    let temp = coins[0];
    let total = 0;
    console.log(temp);
    for(let i=0; i<coins.length; i++){
        if(coins.includes(temp)){
            temp++;
            continue;
        }
        if(coins[i] > temp+1){
            return temp+1;
        }
        else {
            temp += coins[i];
        }
    }
    return 1;
}

console.log(nonConstructibleChange([1, 5, 1, 1, 1, 10, 15, 20, 100]));