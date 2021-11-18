function extraLongFactorials(n) {
    n = BigInt(n);
    let result=BigInt(1);
    for(let i=n; i>0; i--){
        result = result * i;
    }
    result = result.toString();
    console.log(result);
    return result;
}

extraLongFactorials(25);