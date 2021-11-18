function divisibleSumPairs(n, k, ar) {
    let pairs=0;
    for(let i=0; i<n; i++){
        const temp1 = ar[i];
        for(let j=0; j<n; j++){
            if(j === i) break;
            const temp2 = ar[j];
            if((temp1+temp2)%k === 0){
                console.log(temp1 , temp2)
                pairs++;
            }
        }
    }
    return pairs;
}

console.log(divisibleSumPairs(6,3, [1, 3, 2, 6, 1, 2]));