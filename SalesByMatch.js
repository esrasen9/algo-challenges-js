function sockMerchant(n, ar) {
    let total = 0;
    const arr2=[];
    for(let i=0; i<n; i++){
        let temp = 1;
        let sock = ar[i];
        if(!arr2.includes(sock)){
            for(let j=0; j<n; j++){
                if(i !== j && ar[j]===sock){
                    temp++;
                }
            }
            if(temp>0){
                total += parseInt(temp/2);
            }
            arr2.push(sock);
        }

    }
    return total;
}