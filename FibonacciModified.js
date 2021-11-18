function fibonacciModified(t1, t2, n) {
    //Should also work correctly for extra large numbers
    let stepCount = BigInt(n-2);
    let temp1 = BigInt(t1);
    let temp2 = BigInt(t2);
    let result;
    while(stepCount > 0){
        result = temp1 + temp2 * temp2;
        temp1 = temp2;
        temp2 = result;
        stepCount--;
    }
    return result.toString();
}

console.log(fibonacciModified(0,1,6));
console.log(fibonacciModified(0,1,10));