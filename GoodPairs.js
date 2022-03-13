const numIdenticalPairs = (nums) => {
    let hashMap = new Map();
    let count = 0;
    nums.forEach((num) => {
        if (!hashMap.has(num)) {
            hashMap.set(num, 1);
        } else {
            count += hashMap.get(num);
            hashMap.set(num, hashMap.get(num) + 1);
        }
    });
    return count;
};