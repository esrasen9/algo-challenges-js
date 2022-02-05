function threeNumberSum(array, targetSum) {
    let result = [];
    array.sort((a, b) => a - b);
    for (let i = 0; i < array.length; i++) {
        const num1 = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const num2 = array[j];
            const num3 = targetSum - (num1 + num2);
            const idx = array.indexOf(num3);
            if (idx && idx !== i && idx > j) {
                result.push([num1, num2, num3]);
            }
        }
    }
    return result;
}