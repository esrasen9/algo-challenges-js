const majorityElement = (nums) => {
    const objNums = {};
    let res;
    nums.forEach((num) => {
        if (objNums[num]) {
            objNums[num]++;
            if (objNums[num] > (nums.length / 2)) {
                res = num;
            }
        } else {
            objNums[num] = 1;
        }
    })
    return res ? res : nums[0];
}