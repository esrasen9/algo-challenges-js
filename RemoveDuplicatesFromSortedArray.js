const removeDuplicates = (nums) => {
    let unique = [...new Set(nums)];
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (unique[i] !== nums[j]) {
            nums.splice(j, 1);
            j--;
        } else {
            i++;
        }
    }
    return unique.length;
};
