function arrayOfProducts(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        let temp = 1;
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                temp *= array[j];
            }
        }
        result.push(temp);
    }
    return result;
}