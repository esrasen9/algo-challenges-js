const runningSum = (nums) => {
    const res = [];
    let temp = 0;
    nums.forEach((num) => {
        temp += num;
        res.push(temp);
    });
    return res;
};