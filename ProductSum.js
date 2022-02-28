function productSum(array, depth=1) {
    let sum = 0;
    array.forEach(element =>{
        sum += (Array.isArray(element))
            ? productSum(element, depth+1)
            : element;
    });
    return sum * depth;
}

console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));