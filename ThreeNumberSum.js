function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a-b);
    let temp2,temp3;
    const result = [];
    for(let i=0; i<array.length; i++){
        const curr = targetSum - array[i];
        for(let j=i+1; j<array.length; j++){
            if(array.includes(curr - array[j])){
                const k = array.indexOf(curr - array[j]);
                if(i!==k && j!==k){
                    if(k < i){
                        const triple = [array[k],array[i],array[j]];
                        result.push([array[k],array[i],array[j]])
                    }
                }

            }
        }
    }

    return result;
}


console.log(threeNumberSum([12,3,1,2,-6,5,-8,6],0));