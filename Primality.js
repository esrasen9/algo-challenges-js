function primality(n) {
    if(n<=1 || (n!==2 && n%2===0)){
        return "Not prime";
    }
    for(let i=3; i<n/2; i++){
        if(n % i === 0){
            return "Not prime";
        }
    }
    return "Prime";
}