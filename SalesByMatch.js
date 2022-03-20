function sockMerchant2(n, ar) {
    const socks = {};
    let count = 0;
    ar.forEach(sock => {
        if (socks[sock]) {
            socks[sock]++;
            if (socks[sock] % 2 === 0) {
                socks[sock] -= 2;
                count++;
            }
        } else {
            socks[sock] = 1;
        }
    })
    return count;
}

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