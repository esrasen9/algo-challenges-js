function twoNumberSum(array, targetSum) {
    for(let i=0; i<array.length; i++){
        const num1 = array[i];
        const num2 = targetSum - num1;
        if(array.includes(num2) && num1 !== num2){
            return [num1,num2];
        }
    }
    return [];
}
